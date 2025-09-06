import SubmitButton from '@/components/general/SubmitButton'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { handleSubmit } from '@/lib/actions'

const CreateBlogRoute = () => {
	return (
		<div>
			<Card className='max-w-xl mx-auto'>
				<CardHeader>
					<CardTitle>Create Post</CardTitle>
					<CardDescription>
						Create a new post to share with the world
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form action={handleSubmit} className='flex flex-col gap-4'>
						<div className='flex flex-col gap-2'>
							<Label>Title</Label>
							<Input name='title' required type='text' placeholder='Title' />
						</div>
						<div className='flex flex-col gap-2'>
							<Label>Content</Label>
							<Textarea name='content' required placeholder='Content' />
						</div>
						<div className='flex flex-col gap-2'>
							<Label>Image Url</Label>
							<Input name='url' required type='url' placeholder='Image url' />
						</div>

						<SubmitButton />
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default CreateBlogRoute
