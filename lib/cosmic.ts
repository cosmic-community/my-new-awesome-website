import { createBucketClient } from '@cosmicjs/sdk';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG!,
  readKey: process.env.COSMIC_READ_KEY!,
  writeKey: process.env.COSMIC_WRITE_KEY!,
  apiEnvironment: 'staging'
});

// Helper function to handle 404 errors from empty queries
export async function safeCosmicQuery<T>(queryFn: () => Promise<T>): Promise<T | null> {
  try {
    return await queryFn();
  } catch (error: any) {
    if (error?.status === 404) {
      return null;
    }
    throw error;
  }
}