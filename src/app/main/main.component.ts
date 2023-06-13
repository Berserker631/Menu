import { Component } from '@angular/core';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { NavItem } from '../nav-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  activeMenu = false;
  showButton = false;

  ngOnInit() {
    const header = document.getElementById('header')
    const time = document.getElementById('time');
    const date: Date = new Date();
    const newFormat: string = format(date, 'EEEE, d MMMM, yyyy', { locale: es })

    if (time) {
      time.innerText = newFormat;
    }
    if (header) {
      if (this.showButton) {
        this.activeMenu = true;
        header.style.display = 'flex';
      }
      else {
        header!.style.display = 'none';
        this.activeMenu = true;
      }
    }
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  navItems: NavItem[] = [

    // catalog
    {
      displayName: 'Catalog',
      iconName: "../../assets/img/document.svg",
      route: 'app-link',
      parentId: 1,
      children: [
        {
          displayName: 'Vendor Catalog',
          iconName: "../../assets/img/document.svg",
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Markers Catalog',
          iconName: "../../assets/img/document.svg",
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Customer Catalog',
          iconName: "../../assets/img/document.svg",
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Material Catalog',
          iconName: "../../assets/img/document.svg",
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Style Catalog',
          iconName: "../../assets/img/document.svg",
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Fabric Category Catalog',
          iconName: "../../assets/img/document.svg",
          parentId: 1,
          route: 'app-link',
        },
        {
          displayName: 'Conversions Catalog',
          iconName: "../../assets/img/document.svg",
          parentId: 1,
          route: 'app-link',
        }
      ]
    },
    // Inventory
    {
      displayName: 'Inventory',
      iconName: "../../assets/img/check.svg",
      route: 'app-link',
      parentId: 2,
      children: [
        {
          displayName: 'Leather Report',
          iconName: "../../assets/img/check.svg",
          route: 'app-link',
          parentId: 2,
          children: [
            {
              displayName: 'Waste Leather Report Detail',
              iconName: "../../assets/img/check.svg",
              route: 'app-link',
              parentId: 2,
              children: [
                {
                  displayName: 'Waste Leather Report Detail 2',
                  iconName: "../../assets/img/check.svg",
                  route: 'app-link',
                  parentId: 2,
                  children: [
                    {
                      displayName: 'Waste Leather Report Detail 3',
                      iconName: "../../assets/img/check.svg",
                      route: 'app-link',
                      parentId: 2,
                      children: [
                        {
                          displayName: 'Waste Leather Report Detail 4',
                          iconName: "../../assets/img/check.svg",
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
          iconName: "../../assets/img/check.svg",
          parentId: 2,
          route: 'app-link'
        },
        {
          displayName: "Program",
          iconName: '../../assets/img/check.svg',
          parentId: 2,
          route: 'app-link',

        },
        {
          displayName: 'Fabrics Report',
          iconName: "../../assets/img/check.svg",
          parentId: 2,
          route: 'app-link',
        },
        {
          displayName: 'Material Report',
          iconName: "../../assets/img/check.svg",
          parentId: 2,
          route: 'app-link',
        },
        {
          displayName: 'Material and Fabric Reports',
          iconName: "../../assets/img/check.svg",
          parentId: 2,
          route: 'app-link',
        },
        {
          displayName: 'Inventory Operations',
          iconName: "../../assets/img/check.svg",
          parentId: 2,
          route: 'app-link',
        }
      ]
    },
    // Leather
    {
      displayName: 'Leather',
      iconName: '../../assets/img/leather.svg',
      parentId: 3,
      route: 'app-link',
      children: [
        {
          displayName: 'Leather Hides Entrance',
          iconName: '../../assets/img/leather.svg',
          route: 'app-link',
        },
        {
          displayName: 'Leather Entrance BY',
          iconName: '../../assets/img/leather.svg',
          route: 'app-link',
        },
        {
          displayName: 'Leather Transfer Report',
          iconName: '../../assets/img/leather.svg',
          route: 'app-link',
        },
        {
          displayName: 'Leather Repair Pieces Report',
          iconName: '../../assets/img/leather.svg',
          route: 'app-link',
        },
        {
          displayName: 'Group Operations Leather',
          iconName: '../../assets/img/leather.svg',
          route: 'app-link',
        },
        {
          displayName: 'Request Leather Delivery',
          iconName: '../../assets/img/leather.svg',
          route: 'app-link',
        },
        {
          displayName: 'Label Scanning Leather',
          iconName: '../../assets/img/leather.svg',
          route: 'app-link',
        },
        {
          displayName: 'Leather Boxes Received By Container',
          iconName: '../../assets/img/leather.svg',
          route: 'app-link',
        },
        {
          displayName: 'Create Damage Leather',
          iconName: '../../assets/img/leather.svg',
          route: 'app-link',
        },
        {
          displayName: 'Leather Split',
          iconName: '../../assets/img/leather.svg',
          route: 'app-link',
        },
      ]
    },
    // Production
    {
      displayName: 'Production',
      iconName: '../../assets/img/industry.svg',
      parentId: 4,
      route: 'app-link',
      children: [
        {
          displayName: 'Customer Purchase Order',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
          children: [
            {
              displayName: 'Customer Purchase Order2',
              iconName: '../../assets/img/industry.svg',
              route: 'app-link',
            }],
        },
        {
          displayName: 'Customer Order Style',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Container Information',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Master Kit Detail',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'POs Status',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Cut Orders',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Group Operations',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
          children: [
            {
              displayName: 'Fabric Groups',
              iconName: '../../assets/img/industry.svg',
              route: 'app-link',
            }
          ]
        },
        {
          displayName: 'WIP Process',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
          children: [{
            displayName: 'WIP Modules',
            iconName: '../../assets/img/industry.svg',
            route: 'app-link',
          },
          {
            displayName: 'WIP Area',
            iconName: '../../assets/img/industry.svg',
            route: 'app-link',
          }, {
            displayName: 'WIP Process',
            iconName: '../../assets/img/industry.svg',
            route: 'app-link'
          }]
        },
        {
          displayName: 'Bundle Tracking',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Automatic Bundle Tracking',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Automatic Bundle Tracking Zipper',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Bundle Tracking Scanning',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Rack station',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Packing List',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Production Master',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Invoice',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Scanning Tickets',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Entrance Packing',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Packing Boxes',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Print Production Master',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Materials Delivery by Group',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'PO Container',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
        {
          displayName: 'Export Dates and Container Planning',
          iconName: '../../assets/img/industry.svg',
          route: 'app-link',
        },
      ]
    },
    // Invoice/Export
    {
      displayName: 'Invoice/Export',
      iconName: '../../assets/img/delivery.svg',
      parentId: 5,
      route: 'app-link',
      children: [
        {
          displayName: 'Operations',
          iconName: '../../assets/img/delivery.svg',
          route: 'app-link',
        },
        {
          displayName: 'Invoice Information',
          iconName: '../../assets/img/delivery.svg',
          route: 'app-link',
        },
        {
          displayName: 'Invoice Summary By Date',
          iconName: '../../assets/img/delivery.svg',
          route: 'app-link',
        },
        {
          displayName: 'Invoice Analisys',
          iconName: '../../assets/img/delivery.svg',
          route: 'app-link',
        },
        {
          displayName: 'Boxes By Packer',
          iconName: '../../assets/img/delivery.svg',
          route: 'app-link',
        },
        {
          displayName: 'Flow Report',
          iconName: '../../assets/img/delivery.svg',
          route: 'app-link',
        },
        {
          displayName: 'Reports',
          iconName: '../../assets/img/delivery.svg',
          route: 'app-link',
        },
      ]
    },
    // Import/Export
    {
      displayName: 'Import/Export',
      iconName: '../../assets/img/importExport.svg',
      parentId: 6,
      route: 'app-link',
      children: [
        {
          displayName: 'Import/Export Operations',
          iconName: '../../assets/img/importExport.svg',
          route: 'app-link',
        },
        {
          displayName: 'Import/Export Reports',
          iconName: '../../assets/img/importExport.svg',
          route: 'app-link',
        },
      ]
    },
    // Engineering
    {
      displayName: 'Engineering',
      iconName: '../../assets/img/engineering.svg',
      parentId: 7,
      route: 'app-link',
      children: [
        {
          displayName: 'Create New Styles',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Family',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Molds',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Send Styles to RD',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Style Information',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Materials Usage Parameters',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
      ]
    },
    // Accounting
    {
      displayName: 'Accounting',
      iconName: '../../assets/img/accounting.svg',
      parentId: 8,
      route: 'app-link',
      children: [
        {
          displayName: 'Charts Of Account',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
        {
          displayName: 'Position Information',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
        {
          displayName: 'Uncleared Transactions',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
        {
          displayName: 'Reconcile Accounts',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
        {
          displayName: 'Create New POs',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
        {
          displayName: 'Vendor Accounts',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
        {
          displayName: 'Invoices',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
        {
          displayName: 'Purchase Orders',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
        {
          displayName: 'Cash Flow Managment',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
        {
          displayName: 'Retentions',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
        {
          displayName: 'Payments Terms',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
        {
          displayName: 'Account Type',
          iconName: '../../assets/img/accounting.svg',
          route: 'app-link',
        },
      ]
    },
    // Human Resources
    {
      displayName: 'Human Resources',
      iconName: '../../assets/img/people.svg',
      parentId: 0,
      route: 'app-link',
      children: [
        {
          displayName: 'HR Catalog',
          iconName: '../../assets/img/people.svg',
          route: 'app-link',
          children:
            [
              {
                displayName: 'Employess Catalog',
                iconName: '../../assets/img/people.svg',
                route: 'app-link'
              },
              {
                displayName: 'Control Area',
                iconName: '../../assets/img/people.svg',
                route: 'app-link'
              },
              {
                displayName: 'Permission Catalog',
                iconName: '../../assets/img/people.svg',
                route: 'app-link'
              },
              {
                displayName: 'Position Catalog',
                iconName: '../../assets/img/people.svg',
                route: 'app-link'
              },
              {
                displayName: 'Tools Assigment',
                iconName: '../../assets/img/people.svg',
                route: 'app-link'
              },
              {
                displayName: 'Holliday Calendar',
                iconName: '../../assets/img/people.svg',
                route: 'app-link'
              },
              {
                displayName: 'Area Catalog',
                iconName: '../../assets/img/people.svg',
                route: 'app-link'
              },
              {
                displayName: 'Type Of WriteUps',
                iconName: '../../assets/img/people.svg',
                route: 'app-link'
              }
            ]
        },
        {
          displayName: 'HR Report',
          iconName: '../../assets/img/people.svg',
          route: 'app-link',
        },
      ]
    },
    // Payroll
    {
      displayName: 'Payroll',
      iconName: '../../assets/img/money.svg',
      parentId: 10,
      route: 'app-link',
      children: [
        {
          displayName: 'Writes Up Control',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
        {
          displayName: 'Retroactive Reports',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
        {
          displayName: 'Overtime',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
        {
          displayName: 'Subsidies',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
        {
          displayName: 'Permission',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
        {
          displayName: 'Print Permissions',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
        {
          displayName: 'Create Payroll',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
        {
          displayName: 'Edit Payroll',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
        {
          displayName: 'Increase',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
        {
          displayName: 'Employee Vaucher',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
        {
          displayName: 'Vacations Managment',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
        {
          displayName: 'Christmas Bonus',
          iconName: '../../assets/img/money.svg',
          route: 'app-link',
        },
      ]
    },
    // Administration
    {
      displayName: 'Administration',
      iconName: '../../assets/img/engineering.svg',
      parentId: 11,
      route: 'app-link',
      children: [
        {
          displayName: 'Operator Information',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Shipping Term',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Pricing Page',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Pricing Page Sutter',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Pricing Work Sheet',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Pending Class Employee',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Employee Parameters New',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Change Area/Salary',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Inventory Adjustment Summary',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Closing Month Calendar',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Open Orders Report',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
        {
          displayName: 'Orders To Export',
          iconName: '../../assets/img/engineering.svg',
          route: 'app-link',
        },
      ]
    },
    // --> 🎉👇👇👇 (* L O G _ O U T*) 🎉👇👇👇 <--
    {
      displayName: 'Log Out',
      iconName: '../../assets/img/people.svg'
    }
  ]
}
