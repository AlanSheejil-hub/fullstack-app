export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl rounded-xl bg-white shadow-lg">
        {/* Header */}
        <div className="border-b p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            API Tester
          </h1>
          <p className="mt-2 text-gray-500">
            Test REST APIs with different request methods.
          </p>
        </div>

        <div className="p-6">
          {/* Request Bar */}
          <div className="flex gap-4">
            <select className="w-40 rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold outline-none focus:border-blue-500">
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </select>

            <input
              type="text"
              placeholder="Enter API URL..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
              Send
            </button>
          </div>

          {/* Tabs */}
          <div className="mt-8 flex gap-6 border-b">
            <button className="border-b-2 border-blue-600 pb-3 font-semibold text-blue-600">
              Params
            </button>

            <button className="pb-3 text-gray-500 hover:text-black">
              Headers
            </button>

            <button className="pb-3 text-gray-500 hover:text-black">
              Body
            </button>

            <button className="pb-3 text-gray-500 hover:text-black">
              Authorization
            </button>
          </div>

          {/* Request Section */}
          <div className="mt-6 rounded-lg border bg-gray-50 p-5">
            <h2 className="mb-4 text-lg font-semibold">
              Request Body
            </h2>

            <textarea
              rows={12}
              placeholder={`{
  "name": "Alan",
  "email": "alan@example.com"
}`}
              className="w-full rounded-lg border bg-white p-4 font-mono outline-none focus:border-blue-500"
            />
          </div>

          {/* Response */}
          <div className="mt-8 rounded-lg border bg-gray-900 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                Response
              </h2>

              <span className="rounded bg-green-600 px-3 py-1 text-sm text-white">
                Status: 200
              </span>
            </div>

            <pre className="overflow-auto rounded bg-black p-4 text-green-400">
{`{
  "message": "Response will appear here"
}`}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}