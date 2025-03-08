import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Printer, Share2 } from 'lucide-react';

interface AwardLetterProps {
  studentName: string;
  scholarshipName: string;
  amount: string;
  academicYear: string;
  awardDate: string;
}

export function AwardLetter({
  studentName,
  scholarshipName,
  amount,
  academicYear,
  awardDate,
}: AwardLetterProps) {
  const letterContent = `
    ${new Date().toLocaleDateString()}

    Dear ${studentName},

    Congratulations! We are pleased to inform you that you have been awarded the ${scholarshipName} for the ${academicYear} academic year at Nkumba University.

    This scholarship award of ${amount} recognizes your outstanding academic achievements and commitment to excellence. The award will be applied directly to your tuition and fees for the academic year.

    Terms and Conditions:
    1. Maintain a minimum GPA of 3.0
    2. Full-time enrollment status
    3. Adherence to university policies and code of conduct

    This award is subject to:
    - Continued academic progress
    - Availability of funds
    - Compliance with all university regulations

    Please accept this award by signing into your student portal and completing the acceptance process within 14 days of this notice.

    Congratulations again on your achievement!

    Sincerely,
    Scholarship Committee
    Nkumba University
  `;

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([letterContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Award_Letter_${studentName.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow?.document.write(`
      <html>
        <head>
          <title>Award Letter - ${studentName}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              padding: 40px;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            .content {
              white-space: pre-line;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Nkumba University</h1>
            <h2>Scholarship Award Letter</h2>
          </div>
          <div class="content">${letterContent}</div>
        </body>
      </html>
    `);
    printWindow?.document.close();
    printWindow?.print();
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Scholarship Award Letter</CardTitle>
        <CardDescription>
          Official scholarship award notification for {studentName}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-6 rounded-lg mb-6 whitespace-pre-line">
          {letterContent}
        </div>
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2 text-[hsl(var(--icon-primary))]" />
            Print
          </Button>
          <Button variant="outline" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2 text-[hsl(var(--icon-primary))]" />
            Download
          </Button>
          <Button>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}