import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const applicants = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    program: "Computer Science",
    gpa: "3.8",
    status: "Approved",
    appliedDate: "2024-02-20",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.c@example.com",
    program: "Business Administration",
    gpa: "3.6",
    status: "Under Review",
    appliedDate: "2024-02-19",
  },
  {
    id: 3,
    name: "Emily Brown",
    email: "emily.b@example.com",
    program: "Engineering",
    gpa: "3.9",
    status: "Pending",
    appliedDate: "2024-02-18",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.w@example.com",
    program: "Medicine",
    gpa: "3.7",
    status: "Approved",
    appliedDate: "2024-02-17",
  },
];

export function Applicants() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Applicants</h1>
        <p className="text-muted-foreground">
          View and manage scholarship applicants
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <Input placeholder="Search applicants..." />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Applicants</CardTitle>
            <CardDescription>All time applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">1,234</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Approved</CardTitle>
            <CardDescription>Successful applicants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">456</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending</CardTitle>
            <CardDescription>Awaiting review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">89</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rejected</CardTitle>
            <CardDescription>Unsuccessful applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">234</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Applicants</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>GPA</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>
                          {applicant.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{applicant.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {applicant.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{applicant.program}</TableCell>
                  <TableCell>{applicant.gpa}</TableCell>
                  <TableCell>{applicant.appliedDate}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        applicant.status === "Approved"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : applicant.status === "Under Review"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}
                    >
                      {applicant.status}
                    </span>
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
