import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"


 function CardUi() {
  return (

    <Card className="w-full h-full sm:w-full relative z-20 m-auto bg-transparent text-white  ">
      <CardHeader>
        <CardTitle>Contact Me!</CardTitle>
        <CardDescription>let's collabrate</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="https://api.web3forms.com/submit" method="POST" >
        <input type="hidden" className="input" name="access_key" value="42210137-5775-4893-a7ab-dc7501052cd3"></input>
          <div className="grid w-full items-center gap-4">
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" placeholder="Enter your Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" placeholder="Enter your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Message</Label>
              <Textarea name="message" placeholder="Enter your message"/>
              
              
            </div>
            <Button type="submit" className="submit-btn">Submit</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
       
        
      </CardFooter>
    </Card>
  )
}

export default CardUi;