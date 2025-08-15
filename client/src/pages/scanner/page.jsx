import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const [isRecording, setIsRecording] = useState(false);
  const [stream, setStream] = useState(null);

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
          const file = new File([blob], "camera-capture.jpg", {
            type: "image/jpeg",
          });
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
          tips: [
            "Remove cap and label",
            "Rinse thoroughly",
            "Crush to save space",
          ],
        },
        {
          item: "Aluminum Can",
          recyclable: true,
          confidence: 98,
          material: "Aluminum",
          method: "Rinse and recycle",
          nearestStation: "Green Point Recycling",
          distance: "1.2 miles",
          tips: [
            "Rinse out contents",
            "No need to remove labels",
            "Can be recycled infinitely",
          ],
        },
        {
          item: "Pizza Box",
          recyclable: false,
          confidence: 87,
          material: "Cardboard with grease",
          method: "Compost clean parts only",
          nearestStation: "City Compost Facility",
          distance: "2.1 miles",
          tips: [
            "Remove greasy parts",
            "Compost clean cardboard",
            "Grease contaminates recycling",
          ],
        },
      ];

      const randomResult =
        mockResults[Math.floor(Math.random() * mockResults.length)];
      setAnalysisResult(randomResult);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">
                DigiGreen
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/explore"
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                Explore
              </Link>
              <Link
                to="/scanner"
                className="text-green-700 hover:text-green-900 font-medium border-b-2 border-green-600"
              >
                Scanner
              </Link>
              <Link
                to="/chatbot"
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                Chatbot
              </Link>
              <Link
                to="/stations"
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                Stations
              </Link>
              <Link
                to="/marketplace"
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                Marketplace
              </Link>
              <Link
                to="/tips"
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                Tips
              </Link>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Start Scanning
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {/* --- Keep the rest of the JSX content same as your original file --- */}
    </div>
  );
}
