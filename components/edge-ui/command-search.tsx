"use client"

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Menu, Search, X } from 'lucide-react'
import GithubCounter from '../github-counter'
import { Input } from '@/components/ui/input'

export function CommandSearch() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault()
                setIsSearchOpen(true)
            }
            if (event.key === 'Escape') {
                setIsSearchOpen(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>
            <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <GithubCounter />
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(true)}
                    className="text-muted-foreground hover:text-foreground"
                >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </motion.div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="px-4 pt-2 pb-4 space-y-2">
                            {['Components', 'Templates', 'Documentation', 'GitHub'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Modal */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="fixed inset-x-4 top-8 md:inset-x-auto md:left-1/2 md:w-full md:max-w-lg md:-translate-x-1/2 bg-background rounded-lg shadow-lg border"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <div className="flex items-center px-4 py-3 border-b">
                                <Search className="w-5 h-5 text-muted-foreground mr-2" />
                                <Input
                                    type="search"
                                    placeholder="Search components..."
                                    className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                    autoFocus
                                />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsSearchOpen(false)}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    <X className="h-5 w-5" />
                                    <span className="sr-only">Close search</span>
                                </Button>
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-muted-foreground">No recent searches</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

