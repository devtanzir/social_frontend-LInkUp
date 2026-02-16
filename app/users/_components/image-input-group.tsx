import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import Image from "next/image";

interface ImageInputGroupProps {
    name: string;
    inputRef: React.RefObject<HTMLInputElement>;
    id: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    previewImage: string | File | null;
    width: number;
    height: number;
    handleRemoveImage: (type: "profileImage" | "coverImage") => void;
}
const ImageInputGroup = ({name, inputRef, id, handleChange, previewImage, width, height, handleRemoveImage }: ImageInputGroupProps) => {
    return (
        <>
            <div>
            <Label
              htmlFor={id}
              className="text-sm font-medium text-foreground"
            >
              {name} *
            </Label>
            <div className="mt-2">
              <Input
                ref={inputRef}
                id={id}
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="cursor-pointer"
              />
            </div>
            {previewImage && (
              <div className="mt-4 flex flex-col items-center gap-3">
                <Image
                width={width}
                height={height}
                 src={previewImage instanceof File
                                ? URL.createObjectURL(previewImage)
                                : previewImage}
                  alt={name + " preview"}
                  className={`${id === "profileImage" ? "w-24 h-24" : "w-full h-32"} rounded-lg object-cover border-2 border-border`}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => handleRemoveImage(id as "profileImage" | "coverImage")}
                  className="gap-2 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                  Remove
                </Button>
              </div>
            )}
          </div>
        </>
    );
};

export default ImageInputGroup;