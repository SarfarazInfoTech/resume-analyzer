import { ChevronDown, Rocket, Upload } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ResumeAnalyzer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div className="flex gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Left Sidebar */}
      <Card className="w-[300px] p-6 flex flex-col gap-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-gray-800">Your Score</h2>
          <div className="text-4xl font-bold text-orange-400">83/100</div>
          <div className="text-gray-500">9 Issues</div>
        </div>

        <div className="space-y-3">
          {[
            {
              name: "CONTENT",
              score: "50%",
              color: "bg-orange-100 text-orange-600",
            },
            {
              name: "FORMAT",
              score: "100%",
              color: "bg-emerald-100 text-emerald-600",
            },
            {
              name: "SECTIONS",
              score: "67%",
              color: "bg-orange-100 text-orange-600",
            },
            {
              name: "SKILLS",
              score: "100%",
              color: "bg-emerald-100 text-emerald-600",
            },
            {
              name: "STYLE",
              score: "100%",
              color: "bg-emerald-100 text-emerald-600",
            },
          ].map((section) => (
            <Collapsible key={section.name}>
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <span className="font-medium text-gray-600">
                  {section.name}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm px-2 py-0.5 rounded-full ${section.color}`}
                  >
                    {section.score}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pt-2 text-sm text-gray-500">
                  Section details go here...
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        {/* <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
          <Rocket className="w-4 h-4 mr-2" /> View Full Report
        </Button> */}
      </Card>

      {/* Main Content */}
      <Card className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              TECH HACKERS
            </h2>
          </div>
          <Badge variant="outline" className="bg-white">
            6 ISSUES FOUND
          </Badge>
        </div>

        <div className="space-y-6">
          <Card className="bg-indigo-50 p-8 text-center space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Job-Winning Resume In Minutes
            </h3>

            <div className="relative">
              <Textarea
                placeholder="Enter Job Description"
                className="mt-4 w-full pr-12"
                rows={10}
              />
              <label
                htmlFor="file-upload"
                className="absolute bottom-4 right-4 bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded cursor-pointer flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Upload PDF
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {selectedFile && (
              <div className="mt-2 text-sm text-gray-600">
                Uploaded:{" "}
                <span className="font-medium">{selectedFile.name}</span>
              </div>
            )}

            <Button className="bg-indigo-500 hover:bg-indigo-600">
              Check Resume
            </Button>
          </Card>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Resume Review
            </h3>
            <p className="text-gray-600">
              An <span className="font-medium">Applicant Tracking System</span>{" "}
              commonly referred to as <span className="font-medium">ATS</span>{" "}
              is a system used by employers and recruiters to quickly scan a
              large number of job applications.
            </p>
            <p className="text-gray-600">
              A high parse rate of your resume ensures that the ATS can read
              your resume, experience, and skills. This increases the chance of
              getting your resume seen by recruiters.
            </p>
          </div>

          <Card className="p-8 space-y-4">
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-emerald-500 h-2 rounded-full w-[98%]" />
            </div>
            <div className="text-center space-y-2">
              <h4 className="text-xl font-semibold">Great!</h4>
              <p className="text-gray-600">
                We parsed 98% of your resume successfully using an
                industry-leading ATS.
              </p>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}
