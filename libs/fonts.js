import {Roboto , Rethink_Sans , Reem_Kufi_Ink} from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100" , "300" , "400" , "500" , "700" , "900"],
  display: 'swap'
})


export const reemkufiink = Reem_Kufi_Ink({
  subsets: ['latin'],
  weight: ['400']
})


export const rethink_sans = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400' , '500' , '600' , '700' , '800']
})