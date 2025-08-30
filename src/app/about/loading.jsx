const Loading = () => {
  return (
    <div className='w-11/12 mt-20 mx-auto text-white min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        {/* Header Skeleton */}
        <div className='text-center mb-12'>
          <div className='h-16 bg-white/10 rounded-lg mb-4 animate-pulse'></div>
          <div className='h-6 bg-white/10 rounded-lg max-w-2xl mx-auto animate-pulse'></div>
        </div>

        {/* Main Content Skeleton */}
        <div className='grid lg:grid-cols-2 gap-8 mb-12'>
          <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'>
            <div className='h-8 bg-white/10 rounded-lg mb-4 animate-pulse'></div>
            <div className='space-y-3'>
              <div className='h-4 bg-white/10 rounded animate-pulse'></div>
              <div className='h-4 bg-white/10 rounded animate-pulse'></div>
              <div className='h-4 bg-white/10 rounded w-3/4 animate-pulse'></div>
            </div>
          </div>
          <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'>
            <div className='h-8 bg-white/10 rounded-lg mb-4 animate-pulse'></div>
            <div className='space-y-2'>
              <div className='h-4 bg-white/10 rounded animate-pulse'></div>
              <div className='h-4 bg-white/10 rounded animate-pulse'></div>
              <div className='h-4 bg-white/10 rounded animate-pulse'></div>
              <div className='h-4 bg-white/10 rounded animate-pulse'></div>
              <div className='h-4 bg-white/10 rounded animate-pulse'></div>
              <div className='h-4 bg-white/10 rounded animate-pulse'></div>
            </div>
          </div>
        </div>

        {/* Mission Skeleton */}
        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-12'>
          <div className='h-10 bg-white/10 rounded-lg mb-6 animate-pulse'></div>
          <div className='space-y-3'>
            <div className='h-5 bg-white/10 rounded animate-pulse'></div>
            <div className='h-5 bg-white/10 rounded animate-pulse'></div>
            <div className='h-5 bg-white/10 rounded w-2/3 mx-auto animate-pulse'></div>
          </div>
        </div>

        {/* Founder Skeleton */}
        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-12'>
          <div className='h-10 bg-white/10 rounded-lg mb-4 animate-pulse'></div>
          <div className='h-8 bg-white/10 rounded-lg mb-4 animate-pulse'></div>
          <div className='space-y-3'>
            <div className='h-5 bg-white/10 rounded animate-pulse'></div>
            <div className='h-5 bg-white/10 rounded animate-pulse'></div>
            <div className='h-5 bg-white/10 rounded w-4/5 animate-pulse'></div>
          </div>
        </div>

        {/* Contact Skeleton */}
        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-12'>
          <div className='h-10 bg-white/10 rounded-lg mb-4 animate-pulse'></div>
          <div className='h-6 bg-white/10 rounded-lg mb-4 animate-pulse'></div>
          <div className='h-12 bg-white/10 rounded-lg w-64 mx-auto animate-pulse'></div>
        </div>

        {/* Back Button Skeleton */}
        <div className='text-center'>
          <div className='h-12 bg-white/10 rounded-lg w-32 mx-auto animate-pulse'></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
