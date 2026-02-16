import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import Image from "next/image";
import { PostImageProps } from "../_interface/post-image";

const PostImage = ({
  formData,
  imageInputRef,
  handleImageChange,
  handleRemoveImage,
}: PostImageProps) => {
  return (
    <>
      <div>
        <Label htmlFor="image" className="text-sm font-medium text-foreground">
          Image (optional)
        </Label>
        <div className="mt-2">
          <Input
            ref={imageInputRef}
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="cursor-pointer"
          />
        </div>
      </div>

      {formData.image && (
        <div className="mt-4 flex flex-col items-center gap-3">
          <Image
            src={
              formData.image instanceof File
                ? URL.createObjectURL(formData.image)
                : formData.image
            }
            alt="Post preview"
            className="w-full h-48 rounded-lg object-cover border-2 border-border"
            width={400}
            height={200}
          />
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={handleRemoveImage}
            className="gap-2 cursor-pointer justify-center items-center "
          >
            <X className="h-4 w-4" />
            Remove
          </Button>
        </div>
      )}
    </>
  );
};

export default PostImage;
