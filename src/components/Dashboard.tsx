import { FileText, GraduationCap, Users, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const scholarships = [
  {
    title: "Merit Scholarship 2024",
    totalSlots: 50,
    filledSlots: 32,
    deadline: "March 30, 2024",
    amount: "$5,000",
  },
  {
    title: "Sports Excellence Award",
    totalSlots: 20,
    filledSlots: 15,
    deadline: "April 15, 2024",
    amount: "$3,500",
  },
  {
    title: "Leadership Grant",
    totalSlots: 30,
    filledSlots: 18,
    deadline: "May 1, 2024",
    amount: "$4,000",
  },
];

const recentApplications = [
  {
    name: "Sarah Johnson",
    program: "Computer Science",
    status: "Under Review",
    date: "2024-02-20",
  },
  {
    name: "Michael Chen",
    program: "Business Administration",
    status: "Approved",
    date: "2024-02-19",
  },
  {
    name: "Emily Brown",
    program: "Engineering",
    status: "Pending",
    date: "2024-02-18",
  },
];

export function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Scholarship Dashboard</h1>

      {/* Stats Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Total Applications",
            value: "1,234",
            change: "+12.5%",
            icon: FileText,
            color: "text-blue-500",
          },
          {
            title: "Active Scholarships",
            value: "15",
            change: "+2",
            icon: GraduationCap,
          },
          {
            title: "Approved Awards",
            value: "456",
            change: "+5.3%",
            icon: Users,
          },
          {
            title: "Pending Reviews",
            value: "89",
            change: "-3.2%",
            icon: Bell,
          },
        ].map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Total Applications",
            value: "1,234",
            change: "+12.5%",
            icon: FileText,
            color: "text-blue-500",
          },
          {
            title: "Active Scholarships",
            value: "15",
            change: "+2",
            icon: GraduationCap,
            color: "text-green-500",
          },
          {
            title: "Approved Awards",
            value: "456",
            change: "+5.3%",
            icon: Users,
            color: "text-teal-500",
          },
          {
            title: "Pending Reviews",
            value: "89",
            change: "-3.2%",
            icon: Bell,
            color: "text-yellow-500",
          },
        ].map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold ${
                  stat.change.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {stat.value}
              </div>
              <p
                className={`text-xs ${
                  stat.change.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Scholarships and Recent Applications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Scholarships</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {scholarships.map((scholarship) => (
                <div
                  key={scholarship.title}
                  className="border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{scholarship.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Deadline: {scholarship.deadline}
                      </p>
                    </div>
                    <span className="text-primary font-semibold">
                      {scholarship.amount}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>
                        {scholarship.filledSlots}/{scholarship.totalSlots}
                      </span>
                    </div>
                    <Progress
                      value={
                        (scholarship.filledSlots / scholarship.totalSlots) * 100
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentApplications.map((application) => (
                <div
                  key={application.name}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>
                        {application.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{application.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {application.program}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        application.status === "Approved"
                          ? "text-green-500"
                          : application.status === "Under Review"
                          ? "text-orange-500"
                          : "text-blue-500"
                      )}
                    >
                      {application.status}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {application.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
