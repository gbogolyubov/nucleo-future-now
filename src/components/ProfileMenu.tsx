
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings, User, Menu, Info, Heart } from 'lucide-react';
import SettingsDialog from './SettingsDialog';

const ProfileMenu = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Menu className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-white dark:bg-gray-800 border shadow-lg">
          <DropdownMenuItem onClick={() => handleNavClick('#home')} className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Home</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleNavClick('#about')} className="cursor-pointer">
            <Info className="mr-2 h-4 w-4" />
            <span>About Nucleo</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleNavClick('#get-involved')} className="cursor-pointer">
            <Heart className="mr-2 h-4 w-4" />
            <span>Get Involved</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setSettingsOpen(true)} className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </>
  );
};

export default ProfileMenu;
