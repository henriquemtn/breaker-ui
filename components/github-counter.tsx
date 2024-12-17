import { cn } from '@/lib/utils'
import Link from 'next/link'
import { StarIcon } from 'lucide-react'
import { buttonVariants } from './ui/button'
import { Icons } from './icons'
import NumberTicker from './edge-ui/number-ticker'

export default async function GithubCounter() {
    let stars = 300 // Default value

    try {
        const response = await fetch(
            "https://api.github.com/repos/henriquemtn/edge-ui",
            {
                headers: process.env.GITHUB_OAUTH_TOKEN
                    ? {
                        Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
                        "Content-Type": "application/json",
                    }
                    : {},
                next: {
                    revalidate: 3600,
                },
            },
        )

        if (response.ok) {
            const data = await response.json()
            stars = data.stargazers_count || stars // Update stars if API response is valid
        }
    } catch (error) {
        console.error("Error fetching GitHub stars:", error)
    }

    return (
        <Link
            className={cn(
                buttonVariants({
                    variant: "default",
                }),
                "hidden md:inline-flex",
            )}
            target="_blank"
            href="https://github.com/henriquemtn/edge-ui"
        >
            <div className="flex items-center">
                <Icons.gitHub className="size-4" />
                <span className="ml-1 lg:hidden">Star</span>
                <span className="ml-1 hidden lg:inline">Star on GitHub</span>{" "}
            </div>
            <div className="ml-2 flex items-center gap-1 text-sm md:flex">
                <StarIcon className="size-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" />
                <NumberTicker
                    value={stars}
                    className="font-display font-medium text-white dark:text-black"
                />
            </div>
        </Link>
    )
}
