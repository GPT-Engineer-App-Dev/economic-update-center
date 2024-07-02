import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Financial Times</h1>
          <nav>
            <Button variant="link" className="text-white mr-4">Home</Button>
            <Button variant="link" className="text-white mr-4">World</Button>
            <Button variant="link" className="text-white mr-4">Business</Button>
            <Button variant="link" className="text-white">Tech</Button>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Main Article</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque leo nec libero fermentum, a cursus magna dapibus.
            </p>
          </CardContent>
        </Card>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Article 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque leo nec libero fermentum, a cursus magna dapibus.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Article 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque leo nec libero fermentum, a cursus magna dapibus.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Article 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque leo nec libero fermentum, a cursus magna dapibus.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; 2023 Financial Times. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;