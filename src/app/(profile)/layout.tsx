import React from "react";


const Profile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background text-foreground">
          {children}
    </div>
  );
};

export default Profile;
