"use client";

import DottedSeparator from "@/components/shared/dotted-separator";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import usePostForm from "../_hooks/usePostForm";
import PageLoader from "@/components/shared/page-loader";
import SelectUser from "./select-user";
import CurrentUser from "./current-user";
import PostImage from "./post-image";

const CreatePostForm = ({ close }: { close: () => void }) => {
  const {
    formData,
    setFormData,
    handleImageChange,
    handleRemoveImage,
    handleSubmit,
    currentUser,
    users,
    loading,
    isLoading,
    isPending,
    imageInputRef,
  } = usePostForm(close);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <>
      <DialogHeader>
        <DialogTitle className="p-5">Create New Post</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4 px-5 pb-5">
        {/* Select current user */}
        <SelectUser
          users={users || []}
          formData={formData}
          setFormData={setFormData}
        />

        {/* Show current selected user */}
        <CurrentUser currentUser={currentUser} />

        <div>
          <Label
            htmlFor="content"
            className="text-sm font-medium text-foreground"
          >
            What&apos;s on your mind? *
          </Label>
          <Textarea
            id="content"
            placeholder="Share your thoughts, photos, and ideas with LinkUp..."
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="mt-2 resize-none min-h-24"
            required
          />
        </div>

        <PostImage
          formData={formData}
          imageInputRef={imageInputRef}
          handleImageChange={handleImageChange}
          handleRemoveImage={handleRemoveImage}
        />

        <DottedSeparator className="my-4" />

        <div className="flex gap-2 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={close}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading || isPending}
            className="flex-1"
          >
            {loading || isPending ? "Posting..." : "Post"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreatePostForm;
