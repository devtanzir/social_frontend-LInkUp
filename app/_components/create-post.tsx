"use client";

import ResponsiveModal from "@/components/shared/responsive-modal";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import useToggler from "@/hooks/useToggler";
import { Label } from "@radix-ui/react-label";

const CreatePost = () => {
    const { isToggled, toggle } = useToggler();

    return (
        <>
        <Button onClick={toggle} variant={'outline'} className='w-full rounded-full'>
          What&apos;s on your mind?
        </Button>
        {/* Modal */}
        <ResponsiveModal open={isToggled} onOpenChange={toggle}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="user-select" className="text-sm font-medium text-foreground">
              Post as
            </Label>
            <Select value={selectedUserId} onValueChange={setSelectedUserId}>
              <SelectTrigger id="user-select" className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {users.map(user => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {currentUser && (
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarImage src={currentUser.profileImage || "/placeholder.svg"} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <p className="text-sm font-medium text-foreground">{currentUser.name}</p>
            </div>
          )}

          <div>
            <Label htmlFor="content" className="text-sm font-medium text-foreground">
              What&apos;s on your mind? *
            </Label>
            <Textarea
              id="content"
              placeholder="Share your thoughts, photos, and ideas with LinkUp..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-2 resize-none min-h-24"
              required
            />
          </div>

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

          {imagePreview && (
            <div className="mt-4 flex flex-col items-center gap-3">
              <img
                src={imagePreview || "/placeholder.svg"}
                alt="Post preview"
                className="w-full h-48 rounded-lg object-cover border-2 border-border"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={removeImage}
                className="gap-2 cursor-pointer justify-center items-center"
              >
                <X className="h-4 w-4" />
                Remove
              </Button>
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isDisabled} className="flex-1">
              Post
            </Button>
          </div>
        </form>
        </ResponsiveModal>
        </>
    );
};

export default CreatePost;