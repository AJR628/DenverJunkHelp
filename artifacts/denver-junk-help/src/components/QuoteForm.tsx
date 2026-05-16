import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  propertyType: z.string().min(1, "Please select a property type"),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item type.",
  }),
  description: z.string().min(10, "Please briefly describe what needs to go"),
  jobSize: z.string().min(1, "Please select an approximate job size"),
  location: z.string().min(1, "Please select where the items are located"),
  timeframe: z.string().min(1, "Please select your preferred timeframe"),
  contactMethod: z.enum(["phone", "text", "email"], {
    required_error: "You need to select a preferred contact method.",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms to submit a request.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const itemTypes = [
  { id: "furniture", label: "Furniture" },
  { id: "appliances", label: "Appliances" },
  { id: "mattress", label: "Mattress" },
  { id: "yard-debris", label: "Yard debris" },
  { id: "boxes-bags", label: "Boxes/bags" },
  { id: "mixed-junk", label: "Mixed junk" },
  { id: "other", label: "Other" },
];

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      zipCode: "",
      propertyType: "",
      items: [],
      description: "",
      jobSize: "",
      location: "",
      timeframe: "",
      contactMethod: "phone",
      consent: false,
    },
  });

  function onSubmit(data: FormValues) {
    console.log("Form submitted (placeholder):", data);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  }

  if (isSubmitted) {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center max-w-2xl mx-auto my-8">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Request Received</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Thank you. Your request has been routed to a trusted local Denver junk removal provider. They will review your details and contact you shortly to confirm pricing and availability.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" data-testid="button-form-reset">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8 max-w-2xl mx-auto shadow-sm">
      <div className="mb-8 border-b border-border pb-6">
        <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">Request a Quote</h3>
        <p className="text-muted-foreground text-sm">
          Fill out the details below. We'll route your request to a local Denver provider who will contact you with pricing.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Hidden fields */}
          <input type="hidden" name="utm_source" value="" />
          <input type="hidden" name="utm_medium" value="" />
          <input type="hidden" name="utm_campaign" value="" />
          <input type="hidden" name="utm_term" value="" />
          <input type="hidden" name="gclid" value="" />
          <input type="hidden" name="referrer" value="" />
          <input type="hidden" name="landing_page" value="" />
          <input type="hidden" name="timestamp" value="" />
          <input type="hidden" name="device_type" value="" />

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-foreground border-b border-border pb-2">Your Contact Info</h4>
            
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} data-testid="input-fullname" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(303) 555-0123" {...field} data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="jane@example.com" {...field} data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code or Service Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="80202" {...field} data-testid="input-zip" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-property">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="apartment">Apartment/Rental</SelectItem>
                        <SelectItem value="business">Business/Commercial</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Job Details */}
          <div className="space-y-6 pt-4 border-t border-border">
            <h4 className="font-semibold text-lg text-foreground border-b border-border pb-2">Job Details</h4>
            
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">What needs to go? *</FormLabel>
                    <FormDescription>Select all that apply.</FormDescription>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {itemTypes.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                  data-testid={`checkbox-item-${item.id}`}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer leading-tight">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g., A large 3-piece sectional couch and a mini fridge" 
                      className="resize-y min-h-[100px]" 
                      {...field} 
                      data-testid="input-description"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="jobSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Approximate Job Size *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-size">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="single">Single item</SelectItem>
                        <SelectItem value="small">Small load (truck bed)</SelectItem>
                        <SelectItem value="half">Half load</SelectItem>
                        <SelectItem value="full">Full load</SelectItem>
                        <SelectItem value="notsure">Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Item Location / Access *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-location">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ground">Ground floor</SelectItem>
                        <SelectItem value="upstairs">Upstairs (requires stairs)</SelectItem>
                        <SelectItem value="basement">Basement</SelectItem>
                        <SelectItem value="outside">Outside / Garage / Storage</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="timeframe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Timeframe *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-timeframe">
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="asap">ASAP / same day</SelectItem>
                        <SelectItem value="1-2days">Within 1-2 days</SelectItem>
                        <SelectItem value="this-week">This week</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="pt-2">
              <p className="mb-3 text-base font-semibold text-foreground">Photo Upload (Optional)</p>
              <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center bg-muted/30">
                <input type="file" id="photos" accept="image/*" multiple className="hidden" />
                <label htmlFor="photos" className="cursor-pointer">
                  <div className="text-primary font-medium hover:underline mb-1">Click to upload photos</div>
                  <div className="text-sm text-muted-foreground">Photos help us estimate accurately (max 5)</div>
                </label>
              </div>
            </div>
          </div>

          {/* Preferences & Consent */}
          <div className="space-y-6 pt-4 border-t border-border">
            <FormField
              control={form.control}
              name="contactMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Preferred Contact Method *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="phone" data-testid="radio-phone" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Phone call</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="text" data-testid="radio-text" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Text message</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="email" data-testid="radio-email" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Email</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 bg-muted/50 p-4 rounded-lg border border-border">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      data-testid="checkbox-consent"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="font-normal text-sm leading-snug cursor-pointer text-muted-foreground">
                      By submitting this form, you agree that Denver Junk Help may share your request details with a local junk-removal provider so they can contact you about service, pricing, and availability.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" size="lg" className="w-full text-lg h-14" disabled={form.formState.isSubmitting} data-testid="button-submit-quote">
            {form.formState.isSubmitting ? "Submitting..." : "Submit Quote Request"}
          </Button>
        </form>
      </Form>
    </div>
  );
}