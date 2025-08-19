import React, { useState, useRef } from "react";
import {
  Leaf, Camera, Upload, Video, Scan, CheckCircle, XCircle, MapPin, Clock,
  Recycle, FileImage, Lightbulb, Zap, AlertTriangle
} from "lucide-react";

export default function ScannerPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [stream, setStream] = useState(null);
  const [activeTab, setActiveTab] = useState("upload");

  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const cleanup = () => {
    setUploadedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setAnalysisResult(null);
  };

  const handleTabChange = (tab) => {
    cleanup();
    stopCamera();
    setActiveTab(tab);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      cleanup();
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      });
      setStream(mediaStream);
      if (videoRef.current) videoRef.current.srcObject = mediaStream;
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Could not access camera. Please check permissions.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(video, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) {
          cleanup();
          const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" });
          setUploadedFile(file);
          setPreviewUrl(URL.createObjectURL(blob));
          stopCamera(); // Stop camera after capture
          setActiveTab("upload"); // Switch to upload tab to show preview
        }
      }, "image/jpeg");
    }
  };
  
  const analyzeItem = async () => {
    if (!uploadedFile) return alert("Please upload an image or video first.");
    setIsAnalyzing(true);
    setAnalysisResult(null);

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const response = await fetch("http://localhost:5000/api/scan", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to analyze item");
      }
      const result = await response.json();
      setAnalysisResult(result);
    } catch (error) {
      alert("Error analyzing item: " + error.message);
      setAnalysisResult({ error: error.message });
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Helper component for displaying result details
  const ResultDetail = ({ icon, title, children }) => (
    <div className="space-y-3">
      <h4 className="font-semibold text-green-900 flex items-center text-lg">{icon}{title}</h4>
      <div className="bg-green-50/80 p-4 rounded-lg border border-green-100 text-green-700">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Recyclability Scanner</h1>
           <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
             Upload a photo or video of a waste item, or use your camera to instantly determine its recyclability and best disposal method.
           </p>
         </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* ----- Uploader Section ----- */}
          <div className="bg-white/80 backdrop-blur-sm border border-green-200 shadow-lg rounded-lg">
            <div className="p-6 border-b border-green-100">
              <h2 className="text-green-900 flex items-center text-xl font-semibold"><Scan className="h-6 w-6 mr-2" />Item Scanner</h2>
              <p className="text-green-600 mt-2">Upload an image/video or use your camera</p>
            </div>
            <div className="p-6">
              <div className="flex border border-green-200 rounded-lg mb-6 bg-green-50">
                <button onClick={() => handleTabChange("upload")} className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-l-lg transition-colors ${activeTab === "upload" ? "bg-green-600 text-white" : "text-green-700 hover:bg-green-100"}`}><Upload className="h-4 w-4" /> Upload</button>
                <button onClick={() => handleTabChange("camera")} className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 transition-colors ${activeTab === "camera" ? "bg-green-600 text-white" : "text-green-700 hover:bg-green-100"}`}><Camera className="h-4 w-4" /> Camera</button>
              </div>

              {/* ----- File Input (shared by tabs) ----- */}
              <input ref={fileInputRef} type="file" accept="image/*,video/*" onChange={handleFileUpload} className="hidden" />
              
              {/* ----- Upload Tab ----- */}
              {activeTab === "upload" && (
                <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center hover:border-green-400 hover:bg-green-50/50 transition-all cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                  {previewUrl ? (
                    uploadedFile?.type.startsWith("image/") ? (
                      <img src={previewUrl} alt="Preview" className="max-h-64 mx-auto rounded-lg shadow-md" />
                    ) : (
                      <video src={previewUrl} controls className="max-h-64 mx-auto rounded-lg shadow-md" />
                    )
                  ) : (
                    <div className="space-y-4">
                      <FileImage className="h-16 w-16 text-green-400 mx-auto" />
                      <div>
                        <p className="text-green-700 font-medium text-lg">Click to upload or drag and drop</p>
                        <p className="text-green-600 text-sm">PNG, JPG, MP4, MOV up to 50MB</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* ----- Camera Tab ----- */}
              {activeTab === "camera" && (
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                    {stream ? (
                      <>
                        <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                          <button onClick={capturePhoto} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"><Camera className="h-4 w-4" /> Capture</button>
                          <button onClick={stopCamera} className="bg-white/90 border border-gray-300 text-gray-700 hover:bg-white px-4 py-2 rounded-lg transition-colors">Stop</button>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <Camera className="h-16 w-16 text-green-400 mx-auto mb-4" />
                          <button onClick={startCamera} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">Start Camera</button>
                        </div>
                      </div>
                    )}
                  </div>
                  <canvas ref={canvasRef} className="hidden" />
                </div>
              )}
              
              {/* ----- Analyze Button ----- */}
              {uploadedFile && (
                <button onClick={analyzeItem} disabled={isAnalyzing} className="w-full mt-6 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 text-lg font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                  {isAnalyzing ? (
                    <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>Analyzing...</>
                  ) : (
                    <><Scan className="h-5 w-5" /> Analyze Item</>
                  )}
                </button>
              )}
            </div>
          </div>
          
          {/* ----- Results Section ----- */}
          <div className="bg-white/80 backdrop-blur-sm border border-green-200 shadow-lg rounded-lg">
            <div className="p-6 border-b border-green-100">
              <h2 className="text-green-900 text-xl font-semibold">Analysis Results</h2>
              <p className="text-green-600 mt-2">AI-powered assessment and recommendations</p>
            </div>
            <div className="p-6">
              {isAnalyzing && (
                <div className="text-center py-12">
                  <Leaf className="h-16 w-16 mx-auto mb-4 text-green-600 animate-spin" />
                  <p className="text-green-700 mb-2 text-lg">Analyzing your item...</p>
                  <p className="text-green-600">The AI is identifying the material and checking local recycling guidelines.</p>
                </div>
              )}
              
              {analysisResult && !isAnalyzing && (
                analysisResult.error ? (
                  <div className="text-center text-red-600 py-12 bg-red-50 rounded-lg">
                    <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-red-500" />
                    <p className="text-xl mb-2 font-semibold">Analysis Failed</p>
                    <p className="text-base max-w-sm mx-auto">{analysisResult.error}</p>
                  </div>
                ) : (
                <div className="space-y-6">
                  {/* ----- Main Result Header ----- */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-green-900">{analysisResult.item || "Unknown Item"}</h3>
                      <p className="text-green-600 text-lg">{analysisResult.material || "Unknown Material"}</p>
                    </div>
                    <div className="text-right">
                      {analysisResult.recyclable ? (
                        <CheckCircle className="h-10 w-10 text-green-500 mb-2 ml-auto" />
                      ) : (
                        <XCircle className="h-10 w-10 text-red-500 mb-2 ml-auto" />
                      )}
                      <span className={`text-sm px-3 py-1 rounded-full ${analysisResult.recyclable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                        {analysisResult.recyclable ? "Recyclable" : "Not Recyclable"}
                      </span>
                    </div>
                  </div>
                  
                  {/* ----- Confidence Score ----- */}
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-green-700 font-medium">Confidence Score</span>
                      <span className="text-green-900 font-bold text-lg">{analysisResult.confidence}%</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-3"><div className="bg-green-600 h-3 rounded-full transition-all duration-500" style={{ width: `${analysisResult.confidence || 0}%` }}></div></div>
                  </div>

                  {/* ----- Best Disposal Method ----- */}
                  {analysisResult.method && <ResultDetail icon={<Recycle className="h-5 w-5 mr-2" />} title="Best Disposal Method">{analysisResult.method}</ResultDetail>}
                  
                  {/* ----- Preparation Tips ----- */}
                  {analysisResult.tips && analysisResult.tips.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-900 flex items-center text-lg"><CheckCircle className="h-5 w-5 mr-2" />Preparation Tips</h4>
                      <div className="space-y-3">
                        {analysisResult.tips.map((tip, index) => (
                          <div key={index} className="flex items-start space-x-3 bg-green-50/80 p-3 rounded-lg border border-green-100">
                            <Zap className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-green-700">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ----- Visible Issues / Contaminants ----- */}
                  {analysisResult.issues && analysisResult.issues.length > 0 && (
                     <div className="space-y-3">
                      <h4 className="font-semibold text-red-900 flex items-center text-lg"><AlertTriangle className="h-5 w-5 mr-2 text-red-500" />Potential Issues</h4>
                      <div className="space-y-3">
                        {analysisResult.issues.map((issue, index) => (
                          <div key={index} className="flex items-start space-x-3 bg-red-50 p-3 rounded-lg border border-red-100">
                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-red-700">{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* ----- Analyst Notes ----- */}
                  {analysisResult.notes && <ResultDetail icon={<Lightbulb className="h-5 w-5 mr-2" />} title="Analyst Notes">{analysisResult.notes}</ResultDetail>}
                  
                  {/* ----- Nearest Drop-off (mocked data from backend) ----- */}
                  {analysisResult.nearestStation && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-900 flex items-center text-lg"><MapPin className="h-5 w-5 mr-2" />Nearest Drop-off Station</h4>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <p className="font-medium text-blue-900 text-lg">{analysisResult.nearestStation}</p>
                        <p className="text-blue-700 flex items-center mt-2"><Clock className="h-4 w-4 mr-1" />{analysisResult.distance}</p>
                      </div>
                    </div>
                  )}

                  {/* ----- More Details: Show any extra fields from the backend in a nice, row-wise way ----- */}
                  {Object.keys(analysisResult).filter(
                    (key) => ![
                      "item",
                      "material",
                      "recyclable",
                      "confidence",
                      "method",
                      "nearestStation",
                      "distance",
                      "tips",
                      "issues",
                      "notes"
                    ].includes(key)
                  ).length > 0 && (
                    <div className="space-y-3 mt-8">
                      <h4 className="font-semibold text-green-900 text-lg flex items-center"><AlertTriangle className="h-5 w-5 mr-2 text-green-500" />More Details</h4>
                      {Object.entries(analysisResult).map(([key, value]) => {
                        if ([
                          "item",
                          "material",
                          "recyclable",
                          "confidence",
                          "method",
                          "nearestStation",
                          "distance",
                          "tips",
                          "issues",
                          "notes"
                        ].includes(key)) return null;
                        return (
                          <div key={key} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <AlertTriangle className="h-6 w-6 text-green-500 mt-1" />
                            <div>
                              <div className="font-semibold text-green-900 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                              {Array.isArray(value) ? (
                                <ul className="list-disc list-inside text-green-700 text-sm mt-1">
                                  {value.map((v, i) => (
                                    <li key={i}>{typeof v === "object" ? JSON.stringify(v) : v}</li>
                                  ))}
                                </ul>
                              ) : typeof value === "boolean" ? (
                                <span className={`inline-block px-2 py-1 rounded-full text-xs ${value ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>{value ? "Yes" : "No"}</span>
                              ) : (
                                <span className="text-green-700 text-sm mt-1">{typeof value === "object" ? JSON.stringify(value) : value?.toString()}</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                )
              )}
              
              {!analysisResult && !isAnalyzing && (
                <div className="text-center text-gray-500 py-16">
                  <Scan className="h-20 w-20 mx-auto mb-4 text-gray-400" />
                  <p className="text-xl mb-2">Upload an item to get started</p>
                  <p className="text-base">Our AI will analyze it and provide recycling guidance.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}