export const isCareEnv = process.env.NEXT_PUBLIC_BUILD_VARIANT === 'care'
export const isRcvrEnv = process.env.NEXT_PUBLIC_BUILD_VARIANT !== 'care'