import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavItem } from './nav-item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'main';
  selectedItem?: NavItem;
  first: boolean = false;

  constructor() { }

  onClick(item: NavItem): void {
    this.selectedItem = item;
  }

  navItems: NavItem[] = [
    // catalog
    {
      displayName: 'Catalog',
      iconName: 'description',
      route: 'app-link',
      parentId: 1,
      children: [
        {
          displayName: 'Vendor Catalog',
          iconName: 'android',
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Markers Catalog',
          iconName: 'android',
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Customer Catalog',
          iconName: 'android',
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Material Catalog',
          iconName: 'android',
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Style Catalog',
          iconName: 'android',
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Fabric Category Catalog',
          iconName: 'android',
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Conversions Catalog',
          iconName: 'android',
          parentId: 1,
          route: 'app-link',
        }
      ]
    },
    // Inventory
    {
      displayName: 'Inventory',
      iconName: 'assignment',
      route: 'app-link',
      parentId: 2,
      children: [
        {
          displayName: 'Leather Report',
          iconName: 'android',
          route: 'app-link',
          parentId: 2,
          children: [
            {
              displayName: 'Waste Leather Report Detail',
              iconName: 'android',
              route: 'app-link',
              parentId: 2,
              children: [
                {
                  displayName: 'Waste Leather Report Detail 2',
                  iconName: 'android',
                  route: 'app-link',
                  parentId: 2,
                  children: [
                    {
                      displayName: 'Waste Leather Report Detail 3',
                      iconName: 'android',
                      route: 'app-link',
                      parentId: 2,
                      children: [
                        {
                          displayName: 'Waste Leather Report Detail 4',
                          iconName: 'android',
                          route: 'app-link',
                          parentId: 2,
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          displayName: 'Material Document',
          iconName: 'android',
          parentId: 2,
          route: 'app-link'
        },
        {
          displayName: 'Program',
          iconName: 'android',
          parentId: 2,
          route: 'app-link',

        },
        {
          displayName: 'Fabrics Report',
          iconName: 'android',
          parentId: 2,
          route: 'app-link',
        },
        {
          displayName: 'Material Report',
          iconName: 'android',
          parentId: 2,
          route: 'app-link',
        },
        {
          displayName: 'Material and Fabric Reports',
          iconName: 'android',
          parentId: 2,
          route: 'app-link',
        },
        {
          displayName: 'Inventory Operations',
          iconName: 'android',
          parentId: 2,
          route: 'app-link',
        }
      ]
    },
    // Leather
    {
      displayName: 'Leather',
      iconName: 'category',
      parentId: 3,
      route: 'app-link',
      children: [
        {
          displayName: 'Leather Hides Entrance',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Leather Entrance BY',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Leather Transfer Report',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Leather Repair Pieces Report',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Group Operations Leather',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Request Leather Delivery',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Label Scanning Leather',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Leather Boxes Received By Container',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Create Damage Leather',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Leather Split',
          iconName: 'android',
          route: 'app-link',
        },
      ]
    },
    // Production
    {
      displayName: 'Production',
      iconName: 'memory',
      parentId: 4,
      route: 'app-link',
      children: [
        {
          displayName: 'Customer Purchase Order',
          iconName: 'android',
          route: 'app-link',
          children: [
            {
              displayName: 'Customer Purchase Order2',
              iconName: 'android',
              route: 'app-link',
            }],
        },
        {
          displayName: 'Customer Order Style',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Container Information',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Master Kit Detail',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'POs Status',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Cut Orders',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Group Operations',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'WIP Process',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Bundle Tracking',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Automatic Bundle Tracking',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Automatic Bundle Tracking Zipper',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Bundle Tracking Scanning',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Productivity',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Packing List',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Production Master',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Invoice',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Scanning Tickets',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Entrance Packing',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Packing Boxes',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Print Production Master',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Materials Delivery by Group',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'PO Container',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Export Dates and Container Planning',
          iconName: 'android',
          route: 'app-link',
        },
      ]
    },
    // Invoice/Export
    {
      displayName: 'Invoice/Export',
      iconName: 'mail',
      parentId: 5,
      route: 'app-link',
      children: [
        {
          displayName: 'Operations',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Invoice Information',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Invoice Summary By Date',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Invoice Analisys',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Boxes By Packer',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Flow Report',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Reports',
          iconName: 'android',
          route: 'app-link',
        },
      ]
    },
    // Import/Export
    {
      displayName: 'Import/Export',
      iconName: 'accessible_forward',
      parentId: 6,
      route: 'app-link',
      children: [
        {
          displayName: 'Import/Export Operations',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Import/Export Reports',
          iconName: 'android',
          route: 'app-link',
        },
      ]
    },
    // Engineering
    {
      displayName: 'Engineering',
      iconName: 'settings',
      parentId: 7,
      route: 'app-link',
      children: [
        {
          displayName: 'Create New Styles',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Family',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Molds',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Send Styles to RD',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Style Information',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Materials Usage Parameters',
          iconName: 'android',
          route: 'app-link',
        },
      ]
    },
    // Accounting
    {
      displayName: 'Accounting',
      iconName: 'money',
      parentId: 8,
      route: 'app-link',
      children: [
        {
          displayName: 'Charts Of Account',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Position Information',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Uncleared Transactions',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Reconcile Accounts',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Create New POs',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Vendor Accounts',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Invoices',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Purchase Orders',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Cash Flow Managment',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Retentions',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Payments Terms',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Account Type',
          iconName: 'android',
          route: 'app-link',
        },
      ]
    },
    // Human Resources
    {
      displayName: 'Human Resources',
      iconName: 'people',
      parentId: 0,
      route: 'app-link',
      children: [
        {
          displayName: 'HR Catalog',
          iconName: 'android',
          route: 'app-link',
          children:
            [
              {
                displayName: 'Employess Catalog',
                iconName: 'profile',
                route: 'app-link'
              },
              {
                displayName: 'Control Area',
                iconName: 'profile',
                route: 'app-link'
              },
              {
                displayName: 'Permission Catalog',
                iconName: 'profile',
                route: 'app-link'
              },
              {
                displayName: 'Position Catalog',
                iconName: 'profile',
                route: 'app-link'
              },
              {
                displayName: 'Tools Assigment',
                iconName: 'profile',
                route: 'app-link'
              },
              {
                displayName: 'Holliday Calendar',
                iconName: 'profile',
                route: 'app-link'
              },
              {
                displayName: 'Area Catalog',
                iconName: 'profile',
                route: 'app-link'
              },
              {
                displayName: 'Type Of WriteUps',
                iconName: 'profile',
                route: 'app-link'
              }
            ]
        },
        {
          displayName: 'HR Report',
          iconName: 'android',
          route: 'app-link',
        },
      ]
    },
    // Payroll
    {
      displayName: 'Payroll',
      iconName: 'account_balance',
      parentId: 10,
      route: 'app-link',
      children: [
        {
          displayName: 'Writes Up Control',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Retroactive Reports',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Overtime',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Subsidies',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Permission',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Print Permissions',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Create Payroll',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Edit Payroll',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Increase',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Employee Vaucher',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Vacations Managment',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Christmas Bonus',
          iconName: 'android',
          route: 'app-link',
        },
      ]
    },
    // Administration
    {
      displayName: 'Administration',
      iconName: 'whatshot',
      parentId: 11,
      route: 'app-link',
      children: [
        {
          displayName: 'Operator Information',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Shipping Term',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Pricing Page',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Pricing Page Sutter',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Pricing Work Sheet',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Pending Class Employee',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Employee Parameters New',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Change Area/Salary',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Inventory Adjustment Summary',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Closing Month Calendar',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Open Orders Report',
          iconName: 'android',
          route: 'app-link',
        },
        {
          displayName: 'Orders To Export',
          iconName: 'android',
          route: 'app-link',
        },
      ]
    },
    // --> 🎉👇👇👇 (* L O G _ O U T*) 🎉👇👇👇 <--
    {
      displayName: 'Log Out',
      iconName: 'close'

    }
  ]
}
