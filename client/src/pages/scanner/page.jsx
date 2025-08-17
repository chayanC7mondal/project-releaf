import React, { useState, useRef } from "react";
import {
  Leaf,
  Camera,
  Upload,
  Video,
  Scan,
  CheckCircle,
  XCircle,
  MapPin,
  Clock,
  Recycle,
  AlertTriangle,
  FileImage,
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

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
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
          const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" });
          setUploadedFile(file);
          const url = URL.createObjectURL(blob);
          setPreviewUrl(url);
          stopCamera();
        }
      });
    }
  };

  const analyzeItem = async () => {
    if (!uploadedFile) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);

      const mockResults = [
        {
          item: "Plastic Water Bottle",
          recyclable: true,
          confidence: 95,
          material: "PET Plastic (#1)",
          method: "Clean and place in recycling bin",
          nearestStation: "EcoCenter Downtown",
          distance: "0.8 miles",
          tips: ["Remove cap and label", "Rinse thoroughly", "Crush to save space"],
        },
        {
          item: "Aluminum Can",
          recyclable: true,
          confidence: 98,
          material: "Aluminum",
          method: "Rinse and recycle",
          nearestStation: "Green Point Recycling",
          distance: "1.2 miles",
          tips: ["Rinse out contents", "No need to remove labels", "Can be recycled infinitely"],
        },
        {
          item: "Pizza Box",
          recyclable: false,
          confidence: 87,
          material: "Cardboard with grease",
          method: "Compost clean parts only",
          nearestStation: "City Compost Facility",
          distance: "2.1 miles",
          tips: ["Remove greasy parts", "Compost clean cardboard", "Grease contaminates recycling"],
        },
      ];

      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setAnalysisResult(randomResult);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Single Navigation Bar */}
      

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Recyclability Scanner
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Upload photos or videos of waste items, or use your camera to instantly determine recyclability and find the
            best disposal method
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Upload Section */}
          <div className="bg-white/80 backdrop-blur-sm border border-green-200 shadow-lg rounded-lg">
            <div className="p-6 border-b border-green-100">
              <h2 className="text-green-900 flex items-center text-xl font-semibold">
                <Scan className="h-6 w-6 mr-2" />
                Item Scanner
              </h2>
              <p className="text-green-600 mt-2">
                Upload an image/video or use your camera to analyze waste items
              </p>
            </div>
            <div className="p-6">
              {/* Custom Tabs */}
              <div className="flex border border-green-200 rounded-lg mb-6 bg-green-50">
                <button
                  onClick={() => setActiveTab("upload")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-l-lg transition-colors ${
                    activeTab === "upload" 
                      ? "bg-green-600 text-white" 
                      : "text-green-700 hover:bg-green-100"
                  }`}
                >
                  <Upload className="h-4 w-4" />
                  Upload
                </button>
                <button
                  onClick={() => setActiveTab("camera")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 transition-colors ${
                    activeTab === "camera" 
                      ? "bg-green-600 text-white" 
                      : "text-green-700 hover:bg-green-100"
                  }`}
                >
                  <Camera className="h-4 w-4" />
                  Camera
                </button>
                <button
                  onClick={() => setActiveTab("video")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-r-lg transition-colors ${
                    activeTab === "video" 
                      ? "bg-green-600 text-white" 
                      : "text-green-700 hover:bg-green-100"
                  }`}
                >
                  <Video className="h-4 w-4" />
                  Video
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "upload" && (
                <div className="space-y-4">
                  <div
                    className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center hover:border-green-400 hover:bg-green-50/50 transition-all cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {previewUrl ? (
                      <div className="space-y-4">
                        {uploadedFile?.type.startsWith("image/") ? (
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="max-h-64 mx-auto rounded-lg shadow-md"
                          />
                        ) : (
                          <video src={previewUrl} controls className="max-h-64 mx-auto rounded-lg shadow-md" />
                        )}
                        <p className="text-green-700 font-medium">{uploadedFile?.name}</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <FileImage className="h-16 w-16 text-green-400 mx-auto" />
                        <div>
                          <p className="text-green-700 font-medium text-lg">Click to upload or drag and drop</p>
                          <p className="text-green-600 text-sm">PNG, JPG, MP4, MOV up to 10MB</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              )}

              {activeTab === "camera" && (
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                    {stream ? (
                      <>
                        <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                          <button 
                            onClick={capturePhoto} 
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                          >
                            <Camera className="h-4 w-4" />
                            Capture
                          </button>
                          <button 
                            onClick={stopCamera} 
                            className="bg-white/90 border border-gray-300 text-gray-700 hover:bg-white px-4 py-2 rounded-lg transition-colors"
                          >
                            Stop
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <Camera className="h-16 w-16 text-green-400 mx-auto mb-4" />
                          <button 
                            onClick={startCamera} 
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                          >
                            Start Camera
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <canvas ref={canvasRef} className="hidden" />
                </div>
              )}

              {activeTab === "video" && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center hover:border-green-400 hover:bg-green-50/50 transition-all">
                    <Video className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <p className="text-green-700 font-medium text-lg mb-2">Upload a video of your waste item</p>
                    <p className="text-green-600 text-sm mb-4">MP4, MOV, AVI up to 50MB</p>
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Choose Video File
                    </button>
                  </div>
                </div>
              )}

              {uploadedFile && (
                <button
                  onClick={analyzeItem}
                  disabled={isAnalyzing}
                  className="w-full mt-6 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 text-lg font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Scan className="h-5 w-5" />
                      Analyze Item
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white/80 backdrop-blur-sm border border-green-200 shadow-lg rounded-lg">
            <div className="p-6 border-b border-green-100">
              <h2 className="text-green-900 text-xl font-semibold">Analysis Results</h2>
              <p className="text-green-600 mt-2">
                AI-powered recyclability assessment and recommendations
              </p>
            </div>
            <div className="p-6">
              {isAnalyzing && (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
                  <p className="text-green-700 mb-2 text-lg">Analyzing your item...</p>
                  <div className="w-48 mx-auto bg-green-100 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "66%" }}></div>
                  </div>
                </div>
              )}

              {analysisResult && !isAnalyzing && (
                <div className="space-y-6">
                  {/* Item Identification */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-green-900">{analysisResult.item}</h3>
                      <p className="text-green-600 text-lg">{analysisResult.material}</p>
                    </div>
                    <div className="text-right">
                      {analysisResult.recyclable ? (
                        <CheckCircle className="h-10 w-10 text-green-500 mb-2 ml-auto" />
                      ) : (
                        <XCircle className="h-10 w-10 text-red-500 mb-2 ml-auto" />
                      )}
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          analysisResult.recyclable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {analysisResult.recyclable ? "Recyclable" : "Not Recyclable"}
                      </span>
                    </div>
                  </div>

                  {/* Confidence Score */}
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-green-700 font-medium">Confidence Score</span>
                      <span className="text-green-900 font-bold text-lg">{analysisResult.confidence}%</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-3">
                      <div 
                        className="bg-green-600 h-3 rounded-full transition-all duration-500" 
                        style={{ width: `${analysisResult.confidence}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Recycling Method */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-900 flex items-center text-lg">
                      <Recycle className="h-5 w-5 mr-2" />
                      Best Disposal Method
                    </h4>
                    <p className="text-green-700 bg-green-50 p-4 rounded-lg border border-green-100">
                      {analysisResult.method}
                    </p>
                  </div>

                  {/* Nearest Station */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-900 flex items-center text-lg">
                      <MapPin className="h-5 w-5 mr-2" />
                      Nearest Drop-off Station
                    </h4>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="font-medium text-blue-900 text-lg">{analysisResult.nearestStation}</p>
                      <p className="text-blue-700 flex items-center mt-2">
                        <Clock className="h-4 w-4 mr-1" />
                        {analysisResult.distance} away
                      </p>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-900 text-lg">Preparation Tips</h4>
                    <div className="space-y-3">
                      {analysisResult.tips.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-green-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {!analysisResult && !isAnalyzing && (
                <div className="text-center text-gray-500 py-16">
                  <Scan className="h-20 w-20 mx-auto mb-4 text-gray-400" />
                  <p className="text-xl mb-2">Upload an item to get started</p>
                  <p className="text-base">Our AI will analyze it and provide recycling guidance</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scanner Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm border border-green-200 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow">
            <div className="p-6">
              <Recycle className="h-14 w-14 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-900 mb-3">Recyclability Check</h3>
              <p className="text-green-700 text-sm leading-relaxed">Instantly determine if items can be recycled</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-green-200 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow">
            <div className="p-6">
              <MapPin className="h-14 w-14 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-900 mb-3">Find Drop-off Points</h3>
              <p className="text-green-700 text-sm leading-relaxed">Locate nearest recycling stations and facilities</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-green-200 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow">
            <div className="p-6">
              <AlertTriangle className="h-14 w-14 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-900 mb-3">Proper Disposal</h3>
              <p className="text-green-700 text-sm leading-relaxed">Learn the correct way to prepare and dispose items</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-green-200 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow">
            <div className="p-6">
              <CheckCircle className="h-14 w-14 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-900 mb-3">AI Accuracy</h3>
              <p className="text-green-700 text-sm leading-relaxed">95%+ accuracy with advanced computer vision</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}