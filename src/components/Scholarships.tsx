import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Plus, Filter } from 'lucide-react';

const scholarshipsList = [
  {
    id: 1,
    name: 'Merit Scholarship 2024',
    amount: '$5,000',
    deadline: 'March 30, 2024',
    category: 'Academic',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Sports Excellence Award',
    amount: '$3,500',
    deadline: 'April 15, 2024',
    category: 'Sports',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Leadership Grant',
    amount: '$4,000',
    deadline: 'May 1, 2024',
    category: 'Leadership',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Community Service Scholarship',
    amount: '$2,500',
    deadline: 'June 15, 2024',
    category: 'Community',
    status: 'Draft',
  },
];

export function Scholarships() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Scholarships</h1>
          <p className="text-muted-foreground">
            Manage and track all scholarship programs
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Scholarship
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <Input
            placeholder="Search scholarships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Scholarships</CardTitle>
            <CardDescription>Active scholarship programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">15</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Amount</CardTitle>
            <CardDescription>Available funding</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$75,000</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Applications</CardTitle>
            <CardDescription>Total applications received</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,234</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Scholarships</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scholarshipsList.map((scholarship) => (
                <TableRow key={scholarship.id}>
                  <TableCell className="font-medium">
                    {scholarship.name}
                  </TableCell>
                  <TableCell>{scholarship.amount}</TableCell>
                  <TableCell>{scholarship.category}</TableCell>
                  <TableCell>{scholarship.deadline}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        scholarship.status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                      }`}
                    >
                      {scholarship.status}
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