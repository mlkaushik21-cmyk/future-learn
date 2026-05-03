import React, { useState } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [classNum, setClassNum] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('note');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) { navigate('/login'); return; }
    try {
      await addDoc(collection(db, type + 's'), {
        title, subject, class: classNum, content,
        createdAt: new Date(), createdBy: auth.currentUser.email
      });
      setMsg('✅ ' + type + ' add ho gaya!');
      setTitle(''); setSubject(''); setClassNum(''); setContent('');
    } catch (err: any) {
      setMsg('❌ Error: ' + err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
      <p className="text-gray-500 mb-6">Courses, Notes aur Tests add karo</p>
      <form onSubmit={handleAdd} className="bg-white border rounded-2xl p-6 shadow space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select value={type} onChange={e => setType(e.target.value)} className="w-full border rounded-lg px-3 py-2">
            <option value="note">Note</option>
            <option value="course">Course</option>
            <option value="test">Test</option>
            <option value="workbook">Workbook/Worksheet</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} required className="w-full border rounded-lg px-3 py-2" placeholder="e.g. Fractions Notes" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input value={subject} onChange={e => setSubject(e.target.value)} required className="w-full border rounded-lg px-3 py-2" placeholder="Maths" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Class</label>
            <input value={classNum} onChange={e => setClassNum(e.target.value)} required className="w-full border rounded-lg px-3 py-2" placeholder="5" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Content / Link</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} required className="w-full border rounded-lg px-3 py-2 h-24" placeholder="YouTube link ya description daalo" />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700">Add {type}</button>
        {msg && <p className="text-sm mt-2">{msg}</p>}
      </form>
    </div>
  );
}