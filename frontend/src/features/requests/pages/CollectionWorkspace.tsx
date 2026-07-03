import RequestTabs from "@/features/requests/components/RequestTabs";
import RequestEditor from "@/features/requests/components/RequestEditor";
import ResponsePanel from "@/features/requests/components/ResponsePanel";

const CollectionWorkspace = () => {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <main className="flex flex-1 flex-col">
        <RequestTabs />

        <RequestEditor />

        <ResponsePanel />
      </main>
    </div>
  );
};

export default CollectionWorkspace;
