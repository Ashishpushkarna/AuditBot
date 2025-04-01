import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AuditBot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    try {
      const res = await axios.post("http://localhost:8000/query", { query });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error fetching response", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-2xl p-6 shadow-lg rounded-2xl bg-white">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-4">AuditBot</h1>
          <p className="text-gray-600 text-center mb-6">
            Enter your query below to generate an audit report.
          </p>
          <Input
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your query..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            onClick={handleQuery}
          >
            Generate Report
          </Button>
          {response && (
            <div className="mt-6 p-4 bg-gray-200 rounded-lg text-gray-700">
              <h2 className="text-lg font-semibold">Audit Report:</h2>
              <p>{response}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuditBot;
