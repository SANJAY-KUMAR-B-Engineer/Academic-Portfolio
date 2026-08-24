import { jsPDF } from "jspdf";
import { profileData, education, internships, projects, skillsCategories, certifications, achievements, interests, languages } from "../constants";

export function generateResumePdf() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = 16;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin + 4;
    }
  };

  const drawSectionHeader = (title: string) => {
    checkPageBreak(12);
    y += 3;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(30, 64, 175); // Dark blue accent
    doc.text(title.toUpperCase(), margin, y);
    
    // Underline rule
    y += 1.5;
    doc.setDrawColor(203, 213, 225); // Slate 300
    doc.setLineWidth(0.4);
    doc.line(margin, y, pageWidth - margin, y);
    y += 4;
  };

  // Header - Name & Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42); // Slate 900
  doc.text(profileData.name, margin, y);

  y += 5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(59, 130, 246); // Primary Blue
  doc.text("Electronics & Communication Engineering Student", margin, y);

  // Contact Info Line
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105); // Slate 600
  const contactText = `${profileData.location}  |  Ph: ${profileData.phone}  |  Email: ${profileData.email}`;
  doc.text(contactText, margin, y);

  y += 4;
  const linksText = `LinkedIn: ${profileData.linkedin}  |  GitHub: ${profileData.github}`;
  doc.text(linksText, margin, y);

  // Summary Section
  drawSectionHeader("Professional Summary");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const summaryLines = doc.splitTextToSize(profileData.summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.2 + 2;

  // Education Section
  drawSectionHeader("Education");
  education.forEach((edu) => {
    checkPageBreak(12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.degree + (edu.major ? ` – ${edu.major}` : ""), margin, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(edu.period, pageWidth - margin, y, { align: "right" });

    y += 4;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.text(`${edu.institution}, ${edu.location}`, margin, y);
    y += 4.5;
  });

  // Experience / Internship
  drawSectionHeader("Industrial Training & Internships");
  internships.forEach((intern) => {
    checkPageBreak(25);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${intern.company} – ${intern.role}`, margin, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(intern.type, pageWidth - margin, y, { align: "right" });

    y += 4;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    const internDescLines = doc.splitTextToSize(intern.description, contentWidth);
    doc.text(internDescLines, margin, y);
    y += internDescLines.length * 3.8 + 1.5;

    // Bullet domain learnings
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(30, 64, 175);
    doc.text("Domains Covered:", margin + 2, y);
    y += 3.5;

    intern.learnings.forEach((item) => {
      checkPageBreak(5);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(15, 23, 42);
      doc.text(`• ${item.tag} (${item.title}): `, margin + 4, y);
      
      const tagWidth = doc.getTextWidth(`• ${item.tag} (${item.title}): `);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(71, 85, 105);
      const descLines = doc.splitTextToSize(item.desc, contentWidth - 4 - tagWidth);
      doc.text(descLines[0] || "", margin + 4 + tagWidth, y);
      y += 3.5;
    });
    y += 2;
  });

  // Projects Section
  drawSectionHeader("Technical Projects");
  projects.forEach((proj) => {
    checkPageBreak(22);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(proj.title, margin, y);

    y += 4;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    const projDesc = doc.splitTextToSize(proj.description, contentWidth);
    doc.text(projDesc, margin, y);
    y += projDesc.length * 3.8 + 1.5;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(30, 64, 175);
    doc.text("Technologies: ", margin, y);
    const techWidth = doc.getTextWidth("Technologies: ");
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(proj.technologies.join(", "), margin + techWidth, y);
    y += 5;
  });

  // Technical Skills (Categorized)
  drawSectionHeader("Technical Skills");
  skillsCategories.forEach((cat) => {
    checkPageBreak(6);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${cat.category}: `, margin, y);
    
    const catWidth = doc.getTextWidth(`${cat.category}: `);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(cat.skills.join(", "), margin + catWidth, y);
    y += 4.5;
  });

  // Certifications Section
  drawSectionHeader("Certifications");
  certifications.forEach((cert) => {
    checkPageBreak(5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    doc.text(`• ${cert.title} – ${cert.issuer} (${cert.date || "2024"})`, margin + 2, y);
    y += 4;
  });

  // Achievements & Leadership
  drawSectionHeader("Achievements & Leadership");
  achievements.forEach((ach) => {
    checkPageBreak(5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    doc.text(`• ${ach}`, margin + 2, y);
    y += 4;
  });

  // Areas of Interest & Languages
  drawSectionHeader("Areas of Interest & Languages");
  checkPageBreak(10);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Areas of Interest: ", margin, y);
  const intWidth = doc.getTextWidth("Areas of Interest: ");
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text(interests.join(", "), margin + intWidth, y);
  y += 4.5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Languages Known: ", margin, y);
  const langWidth = doc.getTextWidth("Languages Known: ");
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  const langStr = languages.map((l) => `${l.name} (${l.level})`).join(", ");
  doc.text(langStr, margin + langWidth, y);

  // Save the PDF
  doc.save("Sanjay_Kumar_B_Resume.pdf");
}
