import { Span } from 'next/dist/trace'
import Image from 'next/image'
import Link from 'next/link'

interface IappProps {
	data: {
		id: string
		title: string
		content: string
		imageUrl: string
		authorId: string
		authorName: string
		authorImage: string
		createdAt: Date
		updatedAt: Date
	}
}

const BlogpostCard = ({ data }: IappProps) => {
	return (
		<div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg'>
			<Link href={`/post/${data.id}`} className='block w-full h-full'>
				<div className='relative h-72 w-full overflow-hidden object-cover'>
					<Image
						src={data.imageUrl}
						alt='Post image'
						fill
						className='object-cover transition-transform duration-300 group-hover:scale-105'
					/>
				</div>

				<div className='p-4'>
					<h3 className='mb-2 text-lg font-semibold text-gray-900'>
						{data.title}
					</h3>

					<p className='mb-4 text-sm text-gray-600 line-clamp-2'>
						{data.content}
					</p>

					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-2'>
							<div className='relative size-8 overflow-hidden rounded-full'>
								<Image
									src={
										data.authorImage != ''
											? data.authorImage
											: 'https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg'
									}
									alt={data.authorName ? data.authorName : 'author name'}
									fill
									className='object-cover'
								/>
							</div>
							<p className='text-sm font-medium text-gray-700'>
								{data.authorName}
							</p>
						</div>

						<time className='text-sx text-gray-500'>
							{new Intl.DateTimeFormat('id', {
								year: 'numeric',
								month: 'short',
								day: 'numeric',
							}).format(data.createdAt)}
						</time>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BlogpostCard
