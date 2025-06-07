import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const   WebDevelopmentPapersPage = () => {
  const [papers, setPapers] = useState({});
  const [loading, setLoading] = useState(true);

  const paperTypes = {
    quizpaper: "Quiz Paper",
    midsem: "Mid Sem",
    endsem: "End Sem",
    other: "Other",
  };

  const fixCloudinaryPdfUrl = (url) => {
    if (!url) return null;
    if (url.includes("/image/upload/")) {
      return url.replace("/image/upload/", "/raw/upload/");
    }
    return url;
  };

  const formatDownloadUrl = (url) => {
    if (!url) return null;
    if (!url.includes("/upload/")) return url;
    return url.replace("/upload/", "/upload/fl_attachment/");
  };

  const handleView = (url, title) => {
    const fixedUrl = fixCloudinaryPdfUrl(url);
    if (!fixedUrl) return;

    const html = `
      <html style="height:100%; margin:0; padding:0;">
        <head><title>${title}</title></head>
        <body style="height:100%; margin:0; padding:0; overflow:hidden;">
          <iframe
            src="https://docs.google.com/gview?url=${encodeURIComponent(
              fixedUrl
            )}&embedded=true"
            style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;"
          ></iframe>
        </body>
      </html>
    `;
    const blob = new Blob([html], { type: "text/html" });
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownload = (url, title = "paper") => {
    const fixedUrl = fixCloudinaryPdfUrl(url);
    if (!fixedUrl) return;
    const downloadUrl = formatDownloadUrl(fixedUrl);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.target = "_blank";
    link.download = `${title.replace(/\s+/g, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const semester = "Semester 2";
        const subject = "Web Development";

        const yearsRef = collection(db, "semesters", semester, "years");
        const yearsSnapshot = await getDocs(yearsRef);

        const allPapers = {};

        await Promise.all(
          yearsSnapshot.docs.map(async (yearDoc) => {
            const year = yearDoc.id;
            const materialsRef = collection(
              db,
              "semesters",
              semester,
              "years",
              year,
              "materials"
            );

            const q = query(materialsRef, where("subject", "==", subject));
            const materialsSnap = await getDocs(q);

            materialsSnap.forEach((docSnap) => {
              const paper = docSnap.data();
              const rawType = (paper.paperType || "other")
                .toLowerCase()
                .replace(/\s+/g, "");
              const type = paperTypes[rawType] ? rawType : "other";

              if (!allPapers[year]) allPapers[year] = {};
              if (!allPapers[year][type]) allPapers[year][type] = [];

              if (paper.fileURL) {
                allPapers[year][type].push({
                  ...paper,
                  rawURL: paper.fileURL,
                });
              }
            });
          })
        );

        const sortedData = Object.fromEntries(
          Object.entries(allPapers).sort((a, b) => Number(b[0]) - Number(a[0]))
        );

        setPapers(sortedData);
      } catch (error) {
        console.error("Error fetching papers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
      <div className="sticky top-0 z-50 w-full bg-black bg-opacity-90 backdrop-blur-sm py-4">
        <h1 className="text-3xl font-bold text-center">
           Web Development Papers 
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {loading ? (
          <p className="text-center text-gray-400 mt-6">Loading papers...</p>
        ) : Object.entries(papers).length === 0 ? (
          <p className="text-center text-gray-400 mt-6">No papers found.</p>
        ) : (
          Object.entries(papers).map(([year, types]) => (
            <div
              key={year}
              className="mb-12 bg-gray-800 bg-opacity-60 p-6 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Year: {year}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {Object.keys(paperTypes).map((type) =>
                  (types[type] || []).map((paper, idx) => (
                    <div
                      key={`${type}-${idx}`}
                      className="relative w-full aspect-square bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-lg p-4 flex flex-col justify-between transform hover:scale-105 transition-transform duration-200 overflow-hidden"
                    >
                      <div>
                        <h3 className="text-lg font-semibold capitalize line-clamp-1">
                          {paperTypes[type]}
                        </h3>
                        <p className="text-sm mt-1 line-clamp-2">{paper.title}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleView(paper.rawURL, paper.title)}
                          className="flex-1 bg-white bg-opacity-20 hover:bg-opacity-40 text-white text-xs font-medium py-1 rounded-lg text-center transition-colors duration-150"
                          disabled={!paper.rawURL}
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDownload(paper.rawURL, paper.title)}
                          className="flex-1 bg-white bg-opacity-20 hover:bg-opacity-40 text-white text-xs font-medium py-1 rounded-lg text-center transition-colors duration-150"
                          disabled={!paper.rawURL}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WebDevelopmentPapersPage;
