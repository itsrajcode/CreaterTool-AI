'use client'
import { UserProfile, useUser } from "@clerk/nextjs";
import { Settings, User, Shield, Bell, Wallet } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const { user, isLoaded } = useUser();
  const [activeTab, setActiveTab] = useState("profile");
  
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-500 mt-2">Manage your account settings and preferences</p>
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Profile Settings</h2>
              <p className="text-gray-500">Manage your public profile and personal details</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/4">
                  <img
                    src={user?.imageUrl}
                    alt="Profile"
                    className="rounded-full w-24 h-24"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="mt-1 text-lg">
                      {user?.fullName || "Not set"}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1 text-lg">
                      {user?.primaryEmailAddress?.emailAddress}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <div className="mt-1 text-lg">
                      @{user?.username || "not-set"}
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}