import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FORM_ENDPOINT, BRAND_LEGAL } from "@/config";

const itemTypes = [
  { id: "furniture", label: "Furniture" },
  { id: "appliances", label: "Appliances" },
  { id: "mattress", label: "Mattress / bed" },
  { id: "yard-debris", label: "Yard debris" },
  { id: "boxes-bags", label: "Boxes / bags" },
  { id: "mixed-junk", label: "Mixed junk" },
  { id: "other", label: "Other" },
];

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  zipCode: z.string().min(5, "Please enter your ZIP code or address"),
  items: z.array(z.string()).min(1, "Please select at least one item type"),
  description: z.string().min(5, "Please briefly describe what needs to go"),
  timeframe: z.string().min(1, "Please select your preferred timeframe"),
  propertyType: z.string().optional(),
  jobSize: z.string().optional(),
  location: z.string().optional(),
  contactMethod: z.enum(["phone", "text", "email"]).optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Please agree to continue",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      zipCode: "",
      items: [],
      description: "",
      timeframe: "",
      propertyType: "",
      jobSize: "",
      location: "",
      contactMethod: "phone",
      consent: false,
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            utm_source: new URLSearchParams(window.location.search).get("utm_source") ?? "",
            utm_medium: new URLSearchParams(window.location.search).get("utm_medium") ?? "",
            utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") ?? "",
            utm_term: new URLSearchParams(window.location.search).get("utm_term") ?? "",
            gclid: new URLSearchParams(window.location.search).get("gclid") ?? "",
            msclkid: new URLSearchParams(window.location.search).get("msclkid") ?? "",
            fbclid: new URLSearchParams(window.location.search).get("fbclid") ?? "",
            referrer: document.referrer,
            landing_page: window.location.href,
            timestamp: new Date().toISOString(),
            device_type: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
          }),
        });
        setIsSubmitted(true);
      } catch {
        alert("There was a problem submitting your request. Please try again or call us directly.");
      }
    } else {
      // No endpoint configured — simulate submission in dev/placeholder mode
      await new Promise((r) => setTimeout(r, 600));
      setIsSubmitted(true);
    }

    setIsSubmitting(false);
  }

  if (isSubmitted) {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
        <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-serif font-bold text-foreground mb-3">Request received</h3>
        <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto leading-relaxed">
          Thank you. Your request details have been received. A local provider
          in the Denver area may reach out to discuss pricing, availability, and
          next steps.
        </p>
        {!FORM_ENDPOINT && (
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-2 mb-5 max-w-xs mx-auto">
            Form endpoint not yet configured. Set <code>FORM_ENDPOINT</code> in{" "}
            <code>src/config.ts</code> before launch.
          </p>
        )}
        <Button
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }}
          variant="outline"
          size="sm"
          data-testid="button-form-reset"
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
      {!FORM_ENDPOINT && import.meta.env.DEV && (
        <div className="mb-6 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-2">
          <strong>Dev note:</strong> No form endpoint configured. Set{" "}
          <code>FORM_ENDPOINT</code> in <code>src/config.ts</code> before launch.
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7" noValidate>
          {/* Hidden attribution fields — populated on submit via JS above */}
          <input type="hidden" name="utm_source" />
          <input type="hidden" name="utm_medium" />
          <input type="hidden" name="utm_campaign" />
          <input type="hidden" name="utm_term" />
          <input type="hidden" name="gclid" />
          <input type="hidden" name="msclkid" />
          <input type="hidden" name="fbclid" />
          <input type="hidden" name="referrer" />
          <input type="hidden" name="landing_page" />
          <input type="hidden" name="timestamp" />
          <input type="hidden" name="device_type" />

          {/* Required fields */}
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-wide font-semibold text-muted-foreground border-b border-border pb-2">
              Your contact info
            </p>

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} data-testid="input-fullname" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Phone <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="(720) 555-0123"
                        {...field}
                        data-testid="input-phone"
                      />
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
                    <FormLabel>Email <span className="text-muted-foreground font-normal text-xs">(optional)</span></FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="jane@example.com"
                        {...field}
                        data-testid="input-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    ZIP code or service address <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="80202 or 123 Main St, Denver" {...field} data-testid="input-zip" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Job details */}
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-wide font-semibold text-muted-foreground border-b border-border pb-2">
              Job details
            </p>

            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem>
                  <FormLabel>
                    What needs to go? <span className="text-destructive">*</span>
                  </FormLabel>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    {itemTypes.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter((v) => v !== item.id)
                                      );
                                }}
                                data-testid={`checkbox-item-${item.id}`}
                              />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer text-sm leading-tight">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )}
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
                  <FormLabel>
                    Describe what needs to go <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. A large sectional couch, a mini fridge, and about 10 boxes of misc junk from the garage"
                      className="resize-y min-h-[90px]"
                      {...field}
                      data-testid="input-description"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeframe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Preferred timeframe <span className="text-destructive">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-timeframe">
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="asap">ASAP / same day</SelectItem>
                      <SelectItem value="1-2days">Within 1–2 days</SelectItem>
                      <SelectItem value="this-week">This week</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Optional details */}
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-wide font-semibold text-muted-foreground border-b border-border pb-2">
              Optional details <span className="font-normal normal-case">(help the provider give a better estimate)</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-property">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="home">House / condo</SelectItem>
                        <SelectItem value="apartment">Apartment / rental</SelectItem>
                        <SelectItem value="business">Business / commercial</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Approximate job size</FormLabel>
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
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item location / access</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ground">Ground floor / curbside</SelectItem>
                      <SelectItem value="upstairs">Upstairs (requires stairs)</SelectItem>
                      <SelectItem value="basement">Basement</SelectItem>
                      <SelectItem value="outside">Outside / garage / storage unit</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactMethod"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Preferred contact method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row gap-5"
                    >
                      {[
                        { value: "phone", label: "Phone call" },
                        { value: "text", label: "Text" },
                        { value: "email", label: "Email" },
                      ].map((opt) => (
                        <FormItem
                          key={opt.value}
                          className="flex items-center space-x-2 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem
                              value={opt.value}
                              data-testid={`radio-${opt.value}`}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer text-sm">
                            {opt.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            <div>
              <p className="text-sm font-medium text-foreground mb-2">
                Photos{" "}
                <span className="text-muted-foreground font-normal text-xs">(optional — helps estimate accurately)</span>
              </p>
              <div className="border-2 border-dashed border-border rounded-lg p-5 flex flex-col items-center justify-center text-center bg-muted/30">
                <input
                  type="file"
                  id="photos"
                  accept="image/*"
                  multiple
                  className="hidden"
                  aria-label="Upload photos of items"
                />
                <label htmlFor="photos" className="cursor-pointer">
                  <span className="text-primary font-medium hover:underline text-sm">
                    Click to upload photos
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    JPG, PNG — up to 5 files
                  </p>
                </label>
              </div>
            </div>
          </div>

          {/* Consent */}
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 bg-muted/40 p-4 rounded-lg border border-border">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    data-testid="checkbox-consent"
                  />
                </FormControl>
                <div className="space-y-1">
                  <FormLabel className="font-normal text-xs leading-snug cursor-pointer text-muted-foreground">
                    By submitting this form, you agree that {BRAND_LEGAL} may share your
                    request details with an independent local provider who may contact you about
                    your junk removal request. <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full text-base h-13 rounded-full font-semibold shadow-sm"
            disabled={isSubmitting}
            data-testid="button-submit-quote"
          >
            {isSubmitting ? "Sending request…" : "Submit Quote Request"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
