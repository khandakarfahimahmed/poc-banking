import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "zoomAtCoordinate",
})
export class ZoomAtCoordinatePipe implements PipeTransform {
  transform(
    pdfDocument: any,
    canvasContainer: HTMLCanvasElement,
    x: number,
    y: number,
    zoomFactor: number
  ): void {
    if (!pdfDocument || !canvasContainer) {
      console.error("PDF document or canvas container not provided.");
      return;
    }

    // Function to zoom into a PDF at specific coordinates
    const zoomAtCoordinate = (
      doc: any,
      canvas: HTMLCanvasElement,
      xPos: number,
      yPos: number,
      factor: number
    ) => {
      doc.getPage(1).then(function (page: any) {
        const viewport = page.getViewport({ scale: factor });
        const offsetX = xPos - viewport.width / 2;
        const offsetY = viewport.height - yPos - viewport.height / 2;
        page.render({
          canvasContext: canvas.getContext("2d"),
          viewport: viewport,
          offsetX,
          offsetY,
        });
      });
    };

    // Call the zoomAtCoordinate function
    zoomAtCoordinate(pdfDocument, canvasContainer, x, y, zoomFactor);
  }
}
