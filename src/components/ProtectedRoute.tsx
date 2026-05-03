import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

interface Props {
  children: React.ReactNode;
  allowedRole: 'admin' | 'student';
}

export default function ProtectedRoute({ children, allowedRole }: Props) {
  const [status, setStatus] = useState<'loading' | 'allowed' | 'denied'>('loading');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) { setStatus('denied'); return; }
      const snap = await getDoc(doc(db, 'users', user.uid));
      const role = snap.data()?.role;
      setStatus(role === allowedRole ? 'allowed' : 'denied');
    });
    return () => unsub();
  }, [allowedRole]);

  if (status === 'loading') return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-400 text-lg">Loading...</p>
    </div>
  );
  if (status === 'denied') return <Navigate to="/login" replace />;
  return <>{children}</>;
}