export type Image = {
  path: string;
  caption: string;
};

export interface eventType {
  id?: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export type formDataType = {
  [k: string]: FormDataEntryValue | Image;
};

export interface EventFormProps {
  inputData?: eventType | null;
  onSubmit: (formData: formDataType) => void;
  children: React.ReactNode;
}

export interface errorType {
  code?: number | null;
  info?: string | null;
}

export interface ImagePickerProps {
  onSelect: (image: string) => void;
  selectedImage?: string;
  images: Image[];
}

export interface ErrorBlockProps {
  title: string;
  message: string;
}

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
