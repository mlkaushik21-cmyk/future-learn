import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const CLASSES = ['6','7','8','9','10','11','12'];
const SUBJECTS = ['Maths','Science','English','Hindi','Social Science','Computer'];
const TABS = [
  { key: 'notes', label: '📝 Notes' },
  { key: 'courses', label: '🎓 Courses' },
  { key: 'tests', label: '📋 Tests' },
  { key: 'workbooks', label: '📖 Workbook' },
];

export default function Student() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [activeTab, setActiveTab] = useState('notes');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedClass || !selectedSubject) return;
    fetchItems();
  }, [selectedClass, selectedSubject, activeTab]);

  const fetchItems = async () => {
    setLoading(true);
    setItems([]);
    try {
      const q = query(
        collection(db, activeTab),
        where('class', '==', selectedClass),
        where('subject', '==', selectedSubject)
      );
      const snap = await getDocs(q);
      setItems(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Student Panel</h1>
      <p className="text-gray-500 mb-6">Apni class aur subject select karo</p>

      {/* Class & Subject Select */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Class</label>
          <select value={selectedClass} onChange={e => setSelectedClass(e.target.value)}
            className="w-full border rounded-lg px-3 py-2">
            <option value="">-- Select Class --</option>
            {CLASSES.map(c => <option key={c} value={c}>Class {c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Subject</label>
          <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)}
            className="w-full border rounded-lg px-3 py-2">
            <option value="">-- Select Subject --</option>
            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Tabs */}
      {selectedClass && selectedSubject && (
        <>
          <div className="flex gap-2 mb-6 flex-wrap">
            {TABS.map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition
                  ${activeTab === tab.key
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-indigo-400'}`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          {loading ? (
            <p className="text-gray-400">Loading...</p>
          ) : items.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-4xl mb-2">📭</p>
              <p>Koi content nahi mila abhi</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Class {item.class} • {item.subject}</p>
                  <p className="text-gray-700 mt-2">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}