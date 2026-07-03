const RequestEditor = () => {
  return (
    <div className="flex-1 border-b border-slate-800 bg-slate-950 p-6">
      <div className="flex gap-3">
        <select className="rounded-lg bg-slate-800 px-4 py-3">
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>PATCH</option>
          <option>DELETE</option>
        </select>

        <input
          className="flex-1 rounded-lg bg-slate-900 px-4"
          placeholder="https://api.example.com/users"
        />

        <button className="rounded-lg bg-blue-600 px-6 hover:bg-blue-700">
          Send
        </button>
      </div>

      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-4">
        Request body editor coming next...
      </div>
    </div>
  );
};

export default RequestEditor;