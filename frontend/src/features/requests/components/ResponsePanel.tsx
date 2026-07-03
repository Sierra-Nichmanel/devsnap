const ResponsePanel = () => {
  return (
    <div className="h-72 overflow-auto bg-slate-900 p-6">
      <h3 className="mb-4 text-lg font-semibold">Response</h3>

      <pre className="rounded-xl bg-slate-950 p-4 text-green-400">
        {`{
  "status": 200,
  "message": "Waiting for request..."
}`}
      </pre>
    </div>
  );
};

export default ResponsePanel;
