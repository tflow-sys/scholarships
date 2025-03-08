import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Filter, Eye, Download, Award, Mail } from 'lucide-react';
import { useState } from 'react';
import { AwardLetter } from './AwardLetter';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const applications = [
  {
    id: 1,
    scholarshipName: 'Merit Scholarship 2024',
    applicantName: 'Sarah Johnson',
    submissionDate: '2024-02-20',
    status: 'Under Review',
    documents: ['Transcript', 'Letter of Recommendation', 'Essay'],
    amount: '$5,000',
  },
  {
    id: 2,
    scholarshipName: 'Sports Excellence Award',
    applicantName: 'Michael Chen',
    submissionDate: '2024-02-19',
    status: 'Approved',
    documents: ['Sports Achievements', 'Coach Recommendation', 'Medical Certificate'],
    amount: '$3,500',
  },
  {
    id: 3,
    scholarshipName: 'Leadership Grant',
    applicantName: 'Emily Brown',
    submissionDate: '2024-02-18',
    status: 'Pending',
    documents: ['Leadership Portfolio', 'Reference Letters', 'Project Documentation'],
    amount: '$4,000',
  },
];

export function Applications() {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handleDownloadDocuments = (applicationId: number) => {
    toast({
      title: 'Documents Download Started',
      description: 'Your documents will be downloaded shortly.',
    });
  };

  const handleSendEmail = (applicationId: number) => {
    toast({
      title: 'Email Sent Successfully',
      description: 'The applicant has been notified.',
    });
  };

  const filteredApplications = applications.filter(
    (app) =>
      app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.scholarshipName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Applications</h1>
        <p className="text-muted-foreground">
          Review and manage scholarship applications
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <Input 
            placeholder="Search applications..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2 text-[hsl(var(--icon-secondary))]" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover-card-effect">
          <CardHeader>
            <CardTitle>New Applications</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">324</div>
            <p className="text-sm text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card className="hover-card-effect">
          <CardHeader>
            <CardTitle>Processing Time</CardTitle>
            <CardDescription>Average review duration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5.2 days</div>
            <p className="text-sm text-muted-foreground">-1.3 days from target</p>
          </CardContent>
        </Card>
        <Card className="hover-card-effect">
          <CardHeader>
            <CardTitle>Completion Rate</CardTitle>
            <CardDescription>Successfully processed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">94.8%</div>
            <p className="text-sm text-muted-foreground">+2.3% from target</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Scholarship</TableHead>
                <TableHead>Applicant</TableHead>
                <TableHead>Submission Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Documents</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">
                    {application.scholarshipName}
                  </TableCell>
                  <TableCell>{application.applicantName}</TableCell>
                  <TableCell>{application.submissionDate}</TableCell>
                  <TableCell>
                    <span
                      className={`status-badge ${
                        application.status === 'Approved'
                          ? 'status-badge-active'
                          : application.status === 'Under Review'
                          ? 'status-badge-pending'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}
                    >
                      {application.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        {application.documents.length} files
                      </span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDownloadDocuments(application.id)}
                      >
                        <Download className="h-4 w-4 text-[hsl(var(--icon-primary))]" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4 text-[hsl(var(--icon-secondary))]" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleSendEmail(application.id)}
                      >
                        <Mail className="h-4 w-4 text-[hsl(var(--icon-primary))]" />
                      </Button>
                      {application.status === 'Approved' && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Award className="h-4 w-4 text-[hsl(var(--icon-success))]" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <AwardLetter
                              studentName={application.applicantName}
                              scholarshipName={application.scholarshipName}
                              amount={application.amount}
                              academicYear="2024-2025"
                              awardDate={new Date().toISOString()}
                            />
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}