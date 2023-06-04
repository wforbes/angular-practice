import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.css']
})
export class HomeHomeComponent implements OnInit {

  dev = {
    name: 'Will Forbes',
    email: 'wforbes87@gmail.com',
    phone: '801-867-5309',
    address: {
      street: '1234 Fake St. ',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90210'
    },
    summary: `Continue building my career as a software developer creating web or native applications that produce positive
    results for individuals, organizations, and businesses. Contribute to a team solving difficult problems that
    add value and make a difference.`,
    education: {
      school: 'Western Governors University',
      dates: '2019 - 2023',
      degree: 'B.S. Software Engineering',
    },
    jobHistory: [
      {
        company: 'Russell Sigler',
        title: 'Application Developer',
        dates: '01/23 - Present',
        duties: [
          'Provide lead development on core microservices-based CRM application.',
          'Utilize Next.js/React, Material-UI, TypeScript, Node.js/Express, and more.',
          'Document development processes and diagram project architecture.',
          'Coordinate project transition from 3rd party vendor to in-house support.'
        ]
      },
      {
        company: 'JT4 LLC. (AFTC)',
        title: 'Programmer II',
        dates: '03/22 - 01/23',
        duties: [
          'Provide principle fullstack development on Vue.js and Django web application.',
          'Architect an enterprise app solution serving multiple USAF bases.',
          'Administer multiple installations of legacy C#/WPF/SQL software.',
          'Awarded \'Employee of the Quarter\' (Q3 2022).'
        ]
      },
      {
        company: 'IntegrITS Corp. (416th FLTS)',
        title: 'Programmer II',
        dates: '01/20 - 03/22',
        duties: [
          'Principal developer on a Vue.js web app integrated with SharePoint API.',
          'Configure SharePoint 2019 solution and implement JSOM API interaction.',
          'Support development on a C# / WPF desktop app with SQL Server 2019.',
          'Awarded \'Team of the Year 2020\', \'Team of the Quarter (Q4 2020)\', and more.'
        ]
      },
      {
        company: 'IntegrITS Corp. (412th CS)',
        title: 'Configuration Specialist',
        dates: '12/18 - 01/20',
        duties: [
          'Produce modern software process documentation for multiple Agile teams.',
          'Perform in-depth security vulnerability analysis on critical applications.',
          'Provide process improvement consultation for software testers.'
        ]
      },
      {
        company: 'AV Web Designs',
        title: 'Web Developer',
        dates: '06/17 - 11/17',
        duties: [
          'Develop frontend and backend code on dozens of production websites.',
          'Implement WCAG & Section508 web accessibility compliance optimizations.',
          'Develop intranet utilities for managing customer website data.'
        ]
      },
    ]
  };
  constructor() { }
  ngOnInit() {}
}
