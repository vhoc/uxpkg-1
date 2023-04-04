import React, { HTMLAttributes } from "react"

export interface UserPictureProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Width in pixels as a Number (not a string).   
     */
    width?: number
    /** Height in pixels as a Number */
    height?: number
    /** Source of the image. */
    src?: string
}

export const UserPicture = ({width = 32, height = 32, src, ...props}: UserPictureProps): JSX.Element => {

    return  <div style={{
        width: width,
        height: height,
        backgroundImage: `url('${src}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        clipPath: `circle(50% at 50% 50%)`
        
    }} {...props}>
        
    </div>
}
