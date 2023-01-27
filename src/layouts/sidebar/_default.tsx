import React from 'react'
import cn from 'classnames';
import AuthorCard from 'src/components/ui/author-card';
import Logo from 'src/components/ui/logo';
import { MenuItem } from 'src/components/ui/collapsible-menu';
import Scrollbar from 'src/components/ui/scrollbar';
import Button from 'src/components/ui/button';
import { useDrawer } from 'src/components/drawer-views/context';
import { Close } from 'src/components/Icon/close';
import { menuItems } from 'src/layouts/sidebar/_menu-items';
//images

export default function Sidebar({ className }: { className?: string }) {
  const { closeDrawer } = useDrawer();
  return (
    <aside
      className={cn(
        'top-0 z-40 h-full w-full max-w-full border-dashed border-gray-200 bg-body ltr:left-0 ltr:border-r rtl:right-0 rtl:border-l dark:border-gray-700 dark:bg-dark xs:w-80 xl:fixed  xl:w-72 2xl:w-80',
        className
      )}
    >
      <div className="relative flex h-24 items-center justify-between overflow-hidden px-6 py-4 2xl:px-8">
        <Logo />
        <div className="md:hidden">
          <Button
            title="Close"
            color="white"
            shape="circle"
            variant="transparent"
            size="small"
            onClick={closeDrawer}
          >
            <Close className="h-auto w-2.5" />
          </Button>
        </div>
      </div>

      <Scrollbar style={{ height: 'calc(100% - 96px)' }}>
        <div className="px-6 pb-5 2xl:px-8">
          

          <div className="mt-12">
            {menuItems.map((item, index) => (
              <MenuItem
                key={'default' + item.name + index}
                name={item.name}
                href={item.href}
                icon={item.icon}
                dropdownItems={[]}
              />
            ))}
          </div>
        </div>
      </Scrollbar>
    </aside>
  );
}
