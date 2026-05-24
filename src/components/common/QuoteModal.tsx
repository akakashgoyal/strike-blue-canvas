import type { ReactElement } from "react";

import ContactForm from "@/components/forms/ContactForm";
import Modal from "@/components/common/Modal";

type QuoteModalProps = {
  trigger?: ReactElement;
  title?: string;
  description?: string;
  submitLabel?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const QuoteModal = ({
  trigger,
  title = "Get a Free Quote",
  description = "Tell us about your project and we’ll respond with the right next step.",
  submitLabel = "Send Message",
  open,
  onOpenChange,
}: QuoteModalProps) => {
  return (
    <Modal
      trigger={trigger}
      title={title}
      description={description}
      contentClassName="sm:max-w-[740px] lg:max-w-[800px]"
      open={open}
      onOpenChange={onOpenChange}
    >
      <ContactForm
        submitLabel={submitLabel}
        showSuccessState
        successTitle="Thanks, we got it"
        successDescription="Your project brief has been submitted. Our team will review it and get back to you shortly."
      />
    </Modal>
  );
};

export default QuoteModal;
