import UserHeader from './_components/user-header'
import UserList from './_components/user-list'

export default function UsersPage() {

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <UserHeader />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <UserList />
      </div>
    </main>
  )
}
