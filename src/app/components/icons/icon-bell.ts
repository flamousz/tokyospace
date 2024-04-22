import { Component } from '@angular/core';

@Component({
   selector: 'ic-bell',
   template: `
      <svg
         width="100%"
         height="100%"
         viewBox="0 0 20 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M8.58317 17.5003C8.72266 17.754 8.92771 17.9656 9.17691 18.113C9.42612 18.2604 9.71032 18.3381 9.99984 18.3381C10.2894 18.3381 10.5736 18.2604 10.8228 18.113C11.072 17.9656 11.277 17.754 11.4165 17.5003M5 6.66699C5 5.34091 5.52678 4.06914 6.46447 3.13146C7.40215 2.19378 8.67392 1.66699 10 1.66699C11.3261 1.66699 12.5979 2.19378 13.5355 3.13146C14.4732 4.06914 15 5.34091 15 6.66699C15 12.5003 17.5 14.167 17.5 14.167H2.5C2.5 14.167 5 12.5003 5 6.66699Z"
            stroke="#818BB1"
            stroke-linecap="round"
            stroke-linejoin="round"
         />
      </svg>
   `,
   standalone: true,
})
export class IconBell {}
