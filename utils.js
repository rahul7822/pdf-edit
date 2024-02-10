import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";

export async function writePdf(pdf, path = "") {
  const pdfBytes = await pdf.save();
  await fs.promises.writeFile(path, pdfBytes);
  console.log('PDF saved');
}

export async function readPdf(path = "") {
  const file = await fs.promises.readFile(path);
  return await PDFDocument.load(file);
} 