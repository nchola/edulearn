
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { RunwareService } from "@/services/runwareService";

export default function ProjectShowcaseGenerator() {
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const runwareService = new RunwareService("JfZlsigukD65fkU1danFYH0rCRCJX1FW");

  const generateShowcaseImage = async () => {
    setLoading(true);

    try {
      const promptText = `
        Professional e-learning platform showcasing modern UI/UX design. 
        High-quality 3D render featuring a sleek interface with course cards, 
        testimonials, and interactive elements. Clean, minimalist design with 
        gradient accents in blue and orange. Include floating UI elements, 
        abstract shapes, and a subtle grid pattern in the background. 
        Photorealistic quality, dramatic lighting, 8k resolution, trending on Behance.
      `.trim();

      const result = await runwareService.generateImage({
        positivePrompt: promptText,
        model: "runware:100@1",
        width: 1024,
        height: 512,
        CFGScale: 7,
        numberResults: 1,
        outputFormat: "WEBP",
        steps: 4
      });

      setGeneratedImage(result.imageURL);
      toast.success("Project showcase image generated successfully!");
    } catch (error) {
      toast.error("Failed to generate image. Please try again.");
      console.error("Image generation error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Generate Project Showcase Image</h2>
      
      <div className="space-y-4">
        <Button 
          onClick={generateShowcaseImage} 
          disabled={loading}
          className="w-full"
        >
          {loading ? "Generating..." : "Generate Showcase Image"}
        </Button>

        {generatedImage && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Generated Image</h3>
            <div className="border rounded-lg overflow-hidden">
              <img 
                src={generatedImage} 
                alt="Generated project showcase" 
                className="w-full h-auto"
              />
            </div>
            <a 
              href={generatedImage}
              download="project-showcase.webp"
              className="mt-2 inline-block text-primary-600 hover:underline"
            >
              Download Image
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
