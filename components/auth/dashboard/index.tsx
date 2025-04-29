"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  FaUser,
  FaUsers,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

type UserRole = "user" | "moderator" | "admin";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

const Dashboard: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [userRole, setUserRole] = useState<UserRole>("user");

  useEffect(() => {
    // Simulate fetching user role from API/session
    if (session?.user) {
      // For demo purposes, randomly assign a role
      // In a real app, you would get this from your session/auth system
      const roles: UserRole[] = ["user", "moderator", "admin"];
      const mockRole = roles[Math.floor(Math.random() * roles.length)];
      setUserRole(mockRole);
    }
  }, [session]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  // if (status === "unauthenticated") {
  //   router.push("/auth/sign-in");
  //   return null;
  // }

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewContent userRole={userRole} />;
      case "projects":
        return <ProjectsContent userRole={userRole} />;
      case "users":
        return userRole === "user" ? (
          <UnauthorizedContent />
        ) : (
          <UsersContent userRole={userRole} />
        );
      case "settings":
        return <SettingsContent userRole={userRole} />;
      default:
        return <OverviewContent userRole={userRole} />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-zinc-950 via-blue-950 to-zinc-950 text-white backdrop-blur-md bg-opacity-80">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-gray-950/90 text-white backdrop-blur-sm border-r border-indigo-800/30">
        <div className="p-4">
          <h1 className="text-2xl font-bold">AniverseStudio</h1>
          <p className="text-indigo-200 text-sm">Dashboard</p>
        </div>
        <div className="mt-6">
          <UserInfo
            name={session?.user?.name || "User"}
            email={session?.user?.email || "user@example.com"}
            role={userRole}
          />
          <nav className="mt-8">
            <SidebarLink
              icon={<FaClipboardList />}
              title="Overview"
              active={activeTab === "overview"}
              onClick={() => setActiveTab("overview")}
            />
            <SidebarLink
              icon={<FaClipboardList />}
              title="Projects"
              active={activeTab === "projects"}
              onClick={() => setActiveTab("projects")}
            />
            {(userRole === "admin" || userRole === "moderator") && (
              <SidebarLink
                icon={<FaUsers />}
                title="Users"
                active={activeTab === "users"}
                onClick={() => setActiveTab("users")}
              />
            )}
            <SidebarLink
              icon={<FaCog />}
              title="Settings"
              active={activeTab === "settings"}
              onClick={() => setActiveTab("settings")}
            />
            <SidebarLink
              icon={<FaSignOutAlt />}
              title="Sign Out"
              onClick={() => router.push("/auth/sign-in")}
            />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-gradient-to-r from-black/50 via-blue-950/30 to-blue-950/10 shadow-lg m-2 rounded-lg backdrop-blur-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-50">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

// Helper Components
const UserInfo: React.FC<{ name: string; email: string; role: UserRole }> = ({
  name,
  email,
  role,
}) => (
  <div className="px-4 py-3 bg-gradient-to-r from-indigo-900/80 to-indigo-800/60 backdrop-blur-sm rounded-md mb-4 shadow-lg border border-indigo-700/30">
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
        <FaUser className="text-white" />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-indigo-200">{email}</p>
        <span className="inline-block px-2 py-1 text-xs rounded-full bg-indigo-700 mt-1">
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </span>
      </div>
    </div>
  </div>
);

const SidebarLink: React.FC<{
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  onClick: () => void;
}> = ({ icon, title, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-3 w-full text-left ${
      active
        ? "bg-indigo-900 text-white"
        : "text-indigo-200 hover:bg-indigo-700"
    }`}
  >
    <span className="mr-3">{icon}</span>
    {title}
  </button>
);

// Content Components
const OverviewContent: React.FC<{ userRole: UserRole }> = ({ userRole }) => (
  <div className="bg-white/10 shadow overflow-hidden sm:rounded-lg backdrop-blur-sm">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-white">
        Dashboard Overview
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-300">
        Welcome to your AniverseStudio dashboard.
      </p>
    </div>
    <div className="border-t border-gray-700/30">
      <dl>
        <div className="bg-white/5 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-300">Your Role</dt>
          <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
            {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
          </dd>
        </div>
        <div className="bg-white/5 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-300">Active Projects</dt>
          <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
            {userRole === "admin" ? "12" : userRole === "moderator" ? "8" : "3"}
          </dd>
        </div>
        <div className="bg-white/5 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-300">Recent Activity</dt>
          <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
            Last login: {new Date().toLocaleDateString()}
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

const ProjectsContent: React.FC<{ userRole: UserRole }> = ({ userRole }) => {
  // Mock projects data
  const projects = [
    {
      id: 1,
      name: "E-commerce Website",
      status: "In Progress",
      client: "Acme Corp",
    },
    { id: 2, name: "Mobile App UI", status: "Completed", client: "TechStart" },
    {
      id: 3,
      name: "CRM System",
      status: "Planning",
      client: "Global Solutions",
    },
  ];

  return (
    <div className="bg-white/10 shadow overflow-hidden sm:rounded-lg backdrop-blur-sm">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-white">Projects</h3>
        {(userRole === "admin" || userRole === "moderator") && (
          <button className="px-4 py-2 bg-indigo-600/80 text-white rounded-md hover:bg-indigo-700/80 backdrop-blur-sm">
            Add Project
          </button>
        )}
      </div>
      <div className="border-t border-gray-700/30">
        <table className="min-w-full divide-y divide-gray-700/30">
          <thead className="bg-black/20">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-black/10 divide-y divide-gray-700/30">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {project.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {project.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {project.client}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-300 hover:text-indigo-100 mr-3">
                    View
                  </button>
                  {(userRole === "admin" || userRole === "moderator") && (
                    <button className="text-indigo-300 hover:text-indigo-100">
                      Edit
                    </button>
                  )}
                  {userRole === "admin" && (
                    <button className="text-red-300 hover:text-red-100 ml-3">
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const UsersContent: React.FC<{ userRole: UserRole }> = ({ userRole }) => {
  // Mock users data
  const users: User[] = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "admin" },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "moderator",
    },
    { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "user" },
  ];

  return (
    <div className="bg-white/10 shadow overflow-hidden sm:rounded-lg backdrop-blur-sm">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-white">Users</h3>
        {userRole === "admin" && (
          <button className="px-4 py-2 bg-indigo-600/80 text-white rounded-md hover:bg-indigo-700/80 backdrop-blur-sm">
            Add User
          </button>
        )}
      </div>
      <div className="border-t border-gray-700/30">
        <table className="min-w-full divide-y divide-gray-700/30">
          <thead className="bg-black/20">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-black/10 divide-y divide-gray-700/30">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span
                    className={`px-2 py-1 text-xs rounded-full backdrop-blur-sm ${
                      user.role === "admin"
                        ? "bg-red-500/30 text-red-100"
                        : user.role === "moderator"
                        ? "bg-yellow-500/30 text-yellow-100"
                        : "bg-green-500/30 text-green-100"
                    }`}
                  >
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-300 hover:text-indigo-100 mr-3">
                    View
                  </button>
                  {userRole === "admin" && (
                    <>
                      <button className="text-indigo-300 hover:text-indigo-100">
                        Edit
                      </button>
                      <button className="text-red-300 hover:text-red-100 ml-3">
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SettingsContent: React.FC<{ userRole: UserRole }> = ({ userRole }) => (
  <div className="bg-white/10 shadow overflow-hidden sm:rounded-lg backdrop-blur-sm">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-white">
        Account Settings
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-300">
        Manage your profile and preferences.
      </p>
    </div>
    <div className="border-t border-gray-700/30">
      <form className="px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-200"
            >
              First name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-white/10 text-white border-gray-700/30 rounded-md p-2 border"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-200"
            >
              Last name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-white/10 text-white border-gray-700/30 rounded-md p-2 border"
            />
          </div>

          <div className="col-span-6 sm:col-span-4">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-200"
            >
              Email address
            </label>
            <input
              type="text"
              name="email-address"
              id="email-address"
              autoComplete="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-white/10 text-white border-gray-700/30 rounded-md p-2 border"
            />
          </div>

          {userRole === "admin" && (
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-200"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                className="mt-1 block w-full py-2 px-3 border border-gray-700/30 bg-white/10 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="user">User</option>
                <option value="moderator">Moderator</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}

          <div className="col-span-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200"
            >
              Change Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-white/10 text-white border-gray-700/30 rounded-md p-2 border"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600/80 hover:bg-indigo-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 backdrop-blur-sm"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
);

const UnauthorizedContent: React.FC = () => (
  <div className="bg-white/10 shadow overflow-hidden sm:rounded-lg backdrop-blur-sm">
    <div className="px-4 py-5 sm:p-6 text-center">
      <div className="text-red-300 text-5xl mb-4">
        <FaUser />
      </div>
      <h3 className="text-lg leading-6 font-medium text-white mb-2">
        Access Denied
      </h3>
      <p className="text-sm text-gray-300">
        You don't have permission to access this section.
        <br />
        Please contact an administrator if you need access.
      </p>
    </div>
  </div>
);

export default Dashboard;
