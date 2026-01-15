// Article components for structured content
import React from 'react'
import { CheckCircle2, AlertCircle, TrendingUp, Shield, Zap } from 'lucide-react'

export const ArticleSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-heading text-h3 text-navy mb-6 pb-3 border-b-2 border-gold">
      {title}
    </h2>
    {children}
  </section>
)

export const ArticleSubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="font-heading text-h4 text-navy mb-4">
      {title}
    </h3>
    {children}
  </div>
)

export const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-body-m text-gray-700 leading-relaxed mb-4 ${className}`}>
    {children}
  </p>
)

export const Blockquote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="border-l-4 border-gold pl-6 py-4 my-6 bg-gray-50 italic text-gray-700">
    {children}
  </blockquote>
)

export const ChecklistItem: React.FC<{ children: React.ReactNode; checked?: boolean }> = ({ children, checked = true }) => (
  <li className="flex items-start gap-3 mb-2">
    <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${checked ? 'text-green-600' : 'text-gray-400'}`} />
    <span className="text-gray-700">{children}</span>
  </li>
)

export const BulletList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="space-y-2 mb-6">
    {children}
  </ul>
)

export const NumberedList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
    {children}
  </ol>
)

export const HighlightBox: React.FC<{ type?: 'info' | 'warning' | 'success'; children: React.ReactNode }> = ({
  type = 'info',
  children
}) => {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-orange-50 border-orange-200 text-orange-900',
    success: 'bg-green-50 border-green-200 text-green-900',
  }

  const icons = {
    info: <Zap className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    success: <CheckCircle2 className="w-5 h-5" />,
  }

  return (
    <div className={`border-l-4 p-6 my-6 rounded-r-lg ${styles[type]}`}>
      <div className="flex items-start gap-3">
        {icons[type]}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

export const StatCard: React.FC<{ label: string; value: string; trend?: string }> = ({ label, value, trend }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
    <div className="font-heading text-h2 text-navy mb-2">{value}</div>
    <div className="text-body-s text-gray-600 mb-2">{label}</div>
    {trend && (
      <div className="flex items-center justify-center gap-1 text-green-600 text-caption">
        <TrendingUp className="w-4 h-4" />
        <span>{trend}</span>
      </div>
    )}
  </div>
)

export const ComparisonTable: React.FC<{
  headers: string[]
  rows: { label: string; before: string; after: string; improvement: string }[]
}> = ({ headers, rows }) => (
  <div className="overflow-x-auto my-8">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-navy text-white">
          {headers.map((header, i) => (
            <th key={i} className="border border-gray-300 px-4 py-3 text-left font-semibold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="border border-gray-300 px-4 py-3 font-medium">{row.label}</td>
            <td className="border border-gray-300 px-4 py-3">{row.before}</td>
            <td className="border border-gray-300 px-4 py-3">{row.after}</td>
            <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">{row.improvement}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export const StepCard: React.FC<{ number: number; title: string; duration: string; children: React.ReactNode }> = ({
  number,
  title,
  duration,
  children
}) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-heading text-h4 flex-shrink-0">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-heading text-h4 text-navy mb-1">{title}</h4>
        <p className="text-caption text-gray-500">{duration}</p>
      </div>
    </div>
    <div className="ml-16">
      {children}
    </div>
  </div>
)

export const KeyPoint: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({
  icon,
  title,
  children
}) => (
  <div className="bg-gray-50 rounded-lg p-6 mb-4">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-gold text-navy flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h5 className="font-semibold text-navy mb-2">{title}</h5>
        <div className="text-gray-700 text-sm">{children}</div>
      </div>
    </div>
  </div>
)
