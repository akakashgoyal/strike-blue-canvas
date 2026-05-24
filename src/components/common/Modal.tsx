import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

type ModalProps = {
  trigger?: React.ReactElement;
  title?: string;
  description?: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  contentClassName?: string;
  overlayClassName?: string;
};

const Modal = ({
  trigger,
  title,
  description,
  children,
  open,
  onOpenChange,
  contentClassName,
  overlayClassName,
}: ModalProps) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      )}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            overlayClassName,
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-[calc(100vw-1rem)] max-w-[800px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            contentClassName,
          )}
        >
          <div className="relative max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-white via-white to-slate-50 p-5 sm:p-8">
            {(title || description) && (
              <div className="mb-6 pr-10">
                {title && (
                  <DialogPrimitive.Title className="font-display text-3xl text-foreground sm:text-4xl">
                    {title}
                  </DialogPrimitive.Title>
                )}
                {description && (
                  <DialogPrimitive.Description className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {description}
                  </DialogPrimitive.Description>
                )}
              </div>
            )}
            {children}
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/30">
              <X className="h-4 w-4" />
              <span className="sr-only">Close modal</span>
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default Modal;
