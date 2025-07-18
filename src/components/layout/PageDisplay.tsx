import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

interface PageDisplayProps {
  children: React.ReactNode;
}

export const PageDisplay = ({ children }: PageDisplayProps) => {
  return (
    <>
      <header>
        <NavigationMenu className="bg-background max-w-none py-2 justify-between">
          <NavigationMenuList className="justify-between">
            <NavigationMenuItem className="px-3">
              <NavigationMenuLink asChild>
                <Link to="#">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-8 w-auto inline-block"
                  />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Estos elementos son para referencia, el navbar no tendra botones por ahora */}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger className="">Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="text-primary">Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="flex flex-col items-center gap-3 h-[calc(100vh-4rem)] px-2 md:px-8 overflow-auto ">
        {children}
      </main>
    </>
  );
};
